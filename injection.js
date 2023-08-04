// Función vulnerable a inyección de SQL
function getUserData(username) {
  const query = "SELECT * FROM users WHERE username = '" + username + "';";
  // Ejecutar la consulta SQL y devolver los datos del usuario
}
