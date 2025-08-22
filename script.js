document.addEventListener("DOMContentLoaded", () => {
  console.log("CV de Jebril chargé avec succès 🧠");

  // 🌸 Son ambient
  const audio = document.getElementById("sakura-sound");
  if (audio) {
    audio.volume = 0.2;
    audio.play().catch(() => {
      document.addEventListener("click", () => audio.play(), { once: true });
    });

    const breche = document.querySelector(".breche-poetique");
    if (breche) {
      breche.addEventListener("mouseover", () => audio.volume = 0.8);
      breche.addEventListener("mouseleave", () => audio.volume = 0.2);
    }
  }

  // 📊 Toggle des stats
  const toggleBtn = document.getElementById("toggleStatsBtn");
  const statsBox = document.getElementById("statsBox");
  if (toggleBtn && statsBox) {
    toggleBtn.addEventListener("click", () => {
      statsBox.style.display = statsBox.style.display === "none" ? "block" : "none";
    });
  }

  // 🌸 Animation du footer
  const footerImg = document.querySelector(".footer-banner img");
  if (footerImg) {
    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;
      footerImg.style.transform = `translateY(${scrollY * 0.05}px) scale(${1 + scrollY * 0.0002})`;
    });
  }

  // ✨ Animation d’entrée des sections
  const boxes = document.querySelectorAll(".box");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.3 });

  boxes.forEach(box => observer.observe(box));
});
