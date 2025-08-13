document.addEventListener("DOMContentLoaded", () => {
    if (window.location.pathname.includes("thankyou.html")) {
        const urlParams = new URLSearchParams(window.location.search);
        document.getElementById("firstName").textContent = urlParams.get("firstName") || '';
        document.getElementById("lastName").textContent = urlParams.get("lastName") || '';
        document.getElementById("email").textContent = urlParams.get("email") || '';
        document.getElementById("phone").textContent = urlParams.get("phone") || '';
        document.getElementById("volunteer").textContent = urlParams.get("volunteer") || 'No';
        document.getElementById("donate").textContent = urlParams.get("donate") || 'No';
        document.getElementById("donationAmount").textContent = urlParams.get("donationAmount") || '$0';
        document.getElementById("comments").textContent = urlParams.get("comments") || 'None';
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