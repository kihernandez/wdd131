document.addEventListener("DOMContentLoaded", () => {
  const burger = document.getElementById("burger");
  const nav = document.querySelector("nav");

  burger.addEventListener("click", () => {
    nav.classList.toggle("open");
    const isOpen = nav.classList.contains("open");
    burger.textContent = isOpen ? "❌" : "☰";
    burger.setAttribute("aria-expanded", isOpen);
  });
});


document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;