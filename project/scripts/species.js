const animals = [
  {
    name: "Amur Leopard",
    species: "Panthera pardus orientalis",
    image: "./images/amur-leopard.webp",
    description: "Critically endangered due to habitat loss and poaching. Fewer than 100 remain in the wild.",
    status: "Critically Endangered"
  },
  {
    name: "Vaquita",
    species: "Phocoena sinus",
    image: "./images/vaquita.webp",
    description: "A small porpoise native to the northern Gulf of California. Extremely endangered, fewer than 10 remain.",
    status: "Critically Endangered"
  },
  {
    name: "Sumatran Orangutan",
    species: "Pongo abelii",
    image: "./images/sumatran-orangutan.webp",
    description: "Native to Sumatra, Indonesia. Faces threats from deforestation and illegal pet trade.",
    status: "Critically Endangered"
  },
  {
    name: "Javan Rhino",
    species: "Rhinoceros sondaicus",
    image: "./images/javan-rhino.webp",
    description: "One of the rarest rhino species, found only in Ujung Kulon National Park in Indonesia.",
    status: "Critically Endangered"
  },
  {
    name: "Mountain Gorilla",
    species: "Gorilla beringei beringei",
    image: "./images/mountain-gorilla.webp",
    description: "Lives in the mountainous forests of Central Africa. Threatened by habitat loss and disease.",
    status: "Endangered"
  },
  {
    name: "Axolotl",
    species: "Ambystoma mexicanum",
    image: "./images/axolotl.webp",
    description: "A unique amphibian native to Mexico, critically endangered due to urbanization and pollution.",
    status: "Critically Endangered"
  },
  {
    name: "Saola",
    species: "Pseudoryx nghetinhensis",
    image: "./images/saola.webp",
    description: "Rarely seen antelope-like mammal from Laos and Vietnam. Known as the 'Asian Unicorn'.",
    status: "Critically Endangered"
  },
  {
    name: "Northern Bald Ibis",
    species: "Geronticus eremita",
    image: "./images/northern-bald-ibis.webp",
    description: "Once widespread across Europe and the Middle East, now limited to small populations.",
    status: "Endangered"
  },
  {
    name: "Giant Panda",
    species: "Ailuropoda melanoleuca",
    image: "./images/giant-panda.webp",
    description: "Native to China, known for its bamboo diet. Conservation efforts have improved its status.",
    status: "Vulnerable"
  },
  {
    name: "African Forest Elephant",
    species: "Loxodonta cyclotis",
    image: "./images/african-elephant.webp",
    description: "Smaller than its savanna cousin, critically endangered due to ivory poaching and habitat loss.",
    status: "Critically Endangered"
  },
  {
    name: "Yangtze Giant Softshell Turtle",
    species: "Rafetus swinhoei",
    image: "./images/yangtze-giant-turtle.webp",
    description: "One of the world's rarest turtles, with only a few known individuals left. Native to China and Vietnam.",
    status: "Critically Endangered"
  },
  {
    name: "Kakapo",
    species: "Strigops habroptilus",
    image: "./images/kakapo.webp",
    description: "A flightless parrot from New Zealand. Conservation efforts have helped, but numbers remain low.",
    status: "Critically Endangered"
  }
];

const speciesContainer = document.querySelector(".animal-cards");
const filterSelect = document.getElementById("statusFilter");

function renderAnimals(filter = "all") {
  speciesContainer.innerHTML = "";
  const filtered = filter === "all"
    ? animals
    : animals.filter(a => a.status === filter);

  filtered.forEach(animal => {
    const card = document.createElement("div");
    card.classList.add("animal-card");
    card.innerHTML = `
      <div class="card-front">
        <img src="${animal.image}" alt="${animal.name}" loading="lazy">
        <h3>${animal.name}</h3>
        <p><em>${animal.species}</em></p>
        <button class="learn-more-btn">Learn More</button>
      </div>
      <div class="card-back">
        <h3>${animal.name}</h3>
        <p>${animal.description}</p>
        <p><strong>Status:</strong> ${animal.status}</p>
        <button class="back-btn">Back</button>
      </div>
    `;
    speciesContainer.appendChild(card);
  });
}

filterSelect.addEventListener("change", (e) => {
  renderAnimals(e.target.value);
});

renderAnimals();

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("learn-more-btn")) {
    e.target.closest(".animal-card").classList.add("flipped");
  }
  if (e.target.classList.contains("back-btn")) {
    e.target.closest(".animal-card").classList.remove("flipped");
  }
});



const visitMessage = document.getElementById("last-visit-message");
const lastVisit = localStorage.getItem("lastVisit");
const now = Date.now();

function displayVisitMessage() {
  if (!lastVisit) {
    visitMessage.textContent = "Welcome! This is your first time visiting NatureSafe.";
  } else {
    const daysAgo = Math.floor((now - parseInt(lastVisit)) / (1000 * 60 * 60 * 24));
    visitMessage.textContent = daysAgo === 0
      ? "Welcome back! You visited earlier today."
      : `Welcome back! Your last visit was ${daysAgo} day(s) ago.`;
  }

  localStorage.setItem("lastVisit", now);
}

displayVisitMessage();


document.addEventListener("DOMContentLoaded", () => {
  const burger = document.getElementById("burger");
  const nav = document.querySelector("nav");
  const navLinks = document.getElementById("navLinks");

  burger.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    burger.textContent = isOpen ? "❌" : "☰";
    burger.setAttribute("aria-expanded", isOpen);
  })});


document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;