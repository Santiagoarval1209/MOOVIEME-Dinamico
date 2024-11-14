const form = document.getElementById('loginForm');
form.addEventListener('submit', function(event) {
  // No uses event.preventDefault() para permitir que el formulario se envíe al servidor
  
  const username = document.getElementById('username').value; // Asegúrate de que el ID sea 'username'
  const password = document.getElementById('password').value;

  if (!username || !password) {
    alert('Por favor, ingrese sus credenciales.');
    event.preventDefault(); // Solo previene el envío si falta algún campo
  }
});
