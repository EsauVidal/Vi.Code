// Script personalizado para interacciones JS
document.addEventListener("DOMContentLoaded", function () {
  // Smooth scroll para los enlaces del navbar
  const enlaces = document.querySelectorAll(".nav-link");
  enlaces.forEach(function (enlace) {
    enlace.addEventListener("click", function (e) {
      if (this.hash !== "") {
        e.preventDefault();
        const hash = this.hash;
        const destino = document.querySelector(hash);
        if (destino) {
          destino.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    });
  });

  // Mostrar año actual automáticamente en el footer
  const yearSpan = document.getElementById("currentYear");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Inicializar AOS
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
  });

  // Inicializar Swiper (si tienes un carrusel con clase .mi-swiper)
  const swiper = new Swiper(".mi-swiper", {
    loop: true,
    autoplay: {
      delay: 3000,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  // Ejemplo de notificación con Toastify
  Toastify({
    text: "¡Bienvenido a Multiservicios AKI!",
    duration: 3000,
    gravity: "top",
    position: "right",
    backgroundColor: "#198754",
  }).showToast();

  // Ejemplo de alerta con SweetAlert2
  setTimeout(() => {
    Swal.fire({
      title: "¿Necesitas ayuda?",
      text: "Haz clic en contacto y te responderemos pronto.",
      icon: "info",
      confirmButtonText: "Entendido",
    });
  }, 5000);
});
