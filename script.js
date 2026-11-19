const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
menuButton.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
});
document.querySelectorAll(".nav a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
}));
document.getElementById("year").textContent = new Date().getFullYear();

const numbers = ["9500867893", "8100049999"];
function openWhatsApp(phone, product = "") {
  const message = product
    ? `Hello Yellora Industries, I would like to know more about ${product}. Please share the details.`
    : "Hello Yellora Industries, I would like to know more about your electric vehicles and services.";
  window.open(`https://wa.me/91${phone}?text=${encodeURIComponent(message)}`, "_blank", "noopener");
}
document.querySelectorAll(".whatsapp").forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
    openWhatsApp(link.dataset.phone);
  });
});
document.querySelectorAll(".enquiry").forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
    const product = link.dataset.product;
    const selected = window.prompt(`Choose WhatsApp contact for ${product}:\n1. 9500867893\n2. 8100049999\nEnter 1 or 2:`);
    if (selected === "1" || selected === "2") openWhatsApp(numbers[Number(selected) - 1], product);
  });
});
