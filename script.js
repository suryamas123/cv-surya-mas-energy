// Kontak resmi CV. Surya Mas Energy
const COMPANY_CONTACT = {
  whatsapp: "6283134612763", // Nomor 0831 3461 2763 dalam format internasional
  email: "cv.sme41@yahoo.com"
};

document.getElementById("year").textContent = new Date().getFullYear();

const waLink = document.getElementById("whatsapp-link");
const waLabel = document.getElementById("whatsapp-label");
const emailLink = document.getElementById("email-link");
const emailLabel = document.getElementById("email-label");

const number = COMPANY_CONTACT.whatsapp.replace(/[^\d]/g, "");
waLink.href = `https://wa.me/${number}?text=${encodeURIComponent("Halo CV. Surya Mas Energy, saya ingin bertanya mengenai layanan perusahaan.")}`;
waLabel.textContent = "0831 3461 2763";

emailLink.href = `mailto:${COMPANY_CONTACT.email}`;
emailLabel.textContent = COMPANY_CONTACT.email;

const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");
toggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(isOpen));
  toggle.setAttribute("aria-label", isOpen ? "Tutup menu" : "Buka menu");
});
nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  });
});
