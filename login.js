// Código vulnerable: función de login insegura que muestra la contraseña en la consola.

function login(username, password) {
  if (username === 'admin' && password === 'admin123') {
    console.log('Inicio de sesión exitoso. Bienvenido, ' + username + '!');
  } else {
    console.log('Credenciales incorrectas. Intenta nuevamente.');
  }
}

// Llamada de ejemplo a la función login con las credenciales
login('admin', 'admin123');
