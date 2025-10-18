// --- Sticky Header on Scroll ---
window.addEventListener("scroll", () => {
    const header = document.querySelector(".hero-content");
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
  
  // --- Scroll Reveal Animation (using Intersection Observer) ---
  document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.3 }
    );
  
    // Observe any element that has the 'reveal' class or key section classes
    document
      .querySelectorAll(
        ".reveal, .hero, .about-section, .contact-section, .gallery-grid"
      )
      .forEach((section) => observer.observe(section));
  });
  
  // --- Legacy scroll-based reveal fallback (optional safety net) ---
  const reveals = document.querySelectorAll(".reveal");
  function revealOnScroll() {
    const windowHeight = window.innerHeight;
    const revealPoint = 120;
    reveals.forEach((el) => {
      const revealTop = el.getBoundingClientRect().top;
      if (revealTop < windowHeight - revealPoint) {
        el.classList.add("visible");
      } else {
        el.classList.remove("visible");
      }
    });
  }
  window.addEventListener("scroll", revealOnScroll);
  window.addEventListener("load", revealOnScroll);
  
  // --- Contact Form Handler ---
  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");
    if (!form) return;
  
    form.addEventListener("submit", (event) => {
      event.preventDefault();
  
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();
  
      // Remove any existing alert
      const oldAlert = document.querySelector(".alert-message");
      if (oldAlert) oldAlert.remove();
  
      const alert = document.createElement("div");
      alert.classList.add("alert-message");
  
      if (name && email && message) {
        alert.textContent = "✅ Message sent successfully!";
        alert.classList.add("success");
        form.reset();
      } else {
        alert.textContent = "⚠️ Please fill out all fields.";
        alert.classList.add("error");
      }
  
      form.prepend(alert);
      setTimeout(() => alert.remove(), 4000);
    });
  });
  