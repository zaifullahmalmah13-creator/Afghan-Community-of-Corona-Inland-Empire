const yearEl = document.getElementById("year");
yearEl.textContent = new Date().getFullYear();

// Mobile menu toggle
const toggleBtn = document.querySelector(".nav-toggle");
const nav = document.getElementById("site-nav");

toggleBtn.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  toggleBtn.setAttribute("aria-expanded", String(isOpen));
});

// Donate link placeholder
const donateLink = document.getElementById("donateLink");
donateLink.addEventListener("click", (e) => {
  if (donateLink.getAttribute("href") === "#") {
    e.preventDefault();
    alert("Replace the donation link in index.html with your real payment link (PayPal/Stripe/GoFundMe/Zelle).");
  }
});

// Copy email button
document.getElementById("copyEmailBtn").addEventListener("click", async () => {
  const email = "info@yourorg.org";
  try {
    await navigator.clipboard.writeText(email);
    alert("Email copied: " + email);
  } catch {
    alert("Copy failed. Email: " + email);
  }
});

// Contact form (demo only)
const form = document.getElementById("contactForm");
const note = document.getElementById("formNote");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  note.textContent = "This demo form does not send email yet. To make it work, publish on Netlify and enable form handling, or connect a form service.";
  form.reset();
});
