document.addEventListener("DOMContentLoaded", function () {
  // Inicializa AOS
  AOS.init({
    duration: 800,
    easing: "ease-in-out",
  });

  // Mostrar notificación Toastify al cargar la vista contacto
  Toastify({
    text: "¡Puedes escribirnos desde este formulario!",
    duration: 4000,
    gravity: "top",
    position: "right",
    backgroundColor: "#17a2b8",
  }).showToast();

  // Alerta SweetAlert al enviar formulario
  const form = document.querySelector("form");
  form.addEventListener("submit", function (e) {
    Swal.fire({
      title: 'Enviado correctamente',
      text: 'Gracias por contactarnos. Te responderemos pronto.',
      icon: 'success',
      confirmButtonText: 'Cerrar'
    });
  });

  // Scroll suave al hacer clic en enlaces con #
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const destino = document.querySelector(this.getAttribute("href"));
      if (destino) {
        destino.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});
