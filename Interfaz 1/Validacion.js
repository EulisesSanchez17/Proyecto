document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  let userType = document.getElementById('userType').value;
  
  // Validación para asegurar que se ha seleccionado un tipo de usuario
  if (userType === "") {
      document.getElementById('message').innerText = 'Por favor, seleccione un tipo de usuario.';
      return;
  }
  
  // Aquí puedes agregar cualquier validación adicional que necesites
  
  // Ejemplo de validación básica: verificar que el correo tenga un formato válido
  let emailPattern = /.+@uleam\.edu\.ec/;
  if (!emailPattern.test(email)) {
      document.getElementById('message').innerText = 'Por favor, ingrese un correo institucional válido.';
      return;
  }

  // Ejemplo de validación básica: verificar que la contraseña tenga al menos 8 caracteres
  if (password.length < 8) {
      document.getElementById('message').innerText = 'La contraseña debe tener al menos 8 caracteres.';
      return;
  }

  // Simulación de inicio de sesión exitoso
  document.getElementById('message').innerText = 'Ingreso exitoso. Redirigiendo...';
  setTimeout(function() {
      window.location.href = 'dashboard.html'; // Redirigir al usuario a la página de dashboard (por ejemplo)
  }, 2000); // Redirigir después de 2 segundos (2000 milisegundos)
});
