document.addEventListener('DOMContentLoaded', function () {
    // Selecciona el formulario de solicitud de beca
    const scholarshipForm = document.getElementById('scholarship-form');
    
    // Agrega un evento de envío al formulario
    scholarshipForm.addEventListener('submit', function (event) {
      // Evita que el formulario se envíe de manera tradicional
      event.preventDefault();
      // Muestra un mensaje de éxito
      alert('Solicitud enviada con éxito.');
      // Reinicia el formulario para limpiar los campos
      scholarshipForm.reset();
    });
  });
  