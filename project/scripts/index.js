
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
  }
];

const animalCardsContainer = document.querySelector(".animal-cards");

function createAnimalCard(animal) {
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

  animalCardsContainer.appendChild(card);
}

function renderAnimalCards() {
  animals.forEach(function(animal) {
    createAnimalCard(animal);
  });
}

renderAnimalCards();


function handleCardFlip(event) {
  const target = event.target;

  if (target.classList.contains("learn-more-btn")) {
    target.closest(".animal-card").classList.add("flipped");
  }

  if (target.classList.contains("back-btn")) {
    target.closest(".animal-card").classList.remove("flipped");
  }
}

document.addEventListener("click", handleCardFlip);


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
