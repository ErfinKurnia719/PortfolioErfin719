// Navbar scroll effect
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Add some interactive elements
document.querySelectorAll(".skill-card").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-10px) scale(1.02)";
  });

  card.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0) scale(1)";
  });
});

// Animate elements on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe sections for animation
document.querySelectorAll("section").forEach((section) => {
  section.style.opacity = "0";
  section.style.transform = "translateY(30px)";
  section.style.transition = "all 0.6s ease";
  observer.observe(section);
});

// Reset first section (hero) to be visible
document.querySelector(".hero").style.opacity = "1";
document.querySelector(".hero").style.transform = "translateY(0)";

// Add typing effect to hero text (optional enhancement)
function typeWriter(element, text, speed = 100) {
  let i = 0;
  element.innerHTML = "";
  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}

// Add loading animation
window.addEventListener("load", function () {
  document.body.classList.add("loaded");
});

// Add parallax effect to particles
window.addEventListener("scroll", function () {
  const scrolled = window.pageYOffset;
  const particles = document.querySelectorAll(".particle");

  particles.forEach((particle, index) => {
    const speed = (index + 1) * 0.1;
    particle.style.transform = `translateY(${scrolled * speed}px)`;
  });
});

// Mobile menu toggle (if you want to add mobile menu later)
function toggleMobileMenu() {
  const navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("active");
}

// Contact form handling (if you add a contact form later)
function handleContactForm(event) {
  event.preventDefault();
  // Add your contact form logic here
  console.log("Contact form submitted");
}

// Add smooth reveal animation for skills
function revealSkills() {
  const skillCards = document.querySelectorAll(".skill-card");
  skillCards.forEach((card, index) => {
    setTimeout(() => {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, index * 200);
  });
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  // You can add any initialization code here
  console.log("Website loaded successfully!");
});
