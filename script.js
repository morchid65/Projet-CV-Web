document.addEventListener("DOMContentLoaded", () => {
  console.log("CV de Jebril chargé avec succès 🧠");
});

function toggleStats() {
  const box = document.getElementById('statsBox');
  box.style.display = box.style.display === 'none' ? 'block' : 'none';
}

  window.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("sakura-sound");
    audio.volume = 0.2;
    audio.play().catch(() => {
      document.addEventListener("click", () => {
        audio.play();
      }, { once: true });
    });

    const breche = document.querySelector(".breche-poetique");
    breche.addEventListener("mouseover", () => {
      audio.volume = 0.8;
    });
    breche.addEventListener("mouseleave", () => {
      audio.volume = 0.2;
    });
  });


