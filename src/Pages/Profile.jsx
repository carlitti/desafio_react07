import React from 'react'

const Profile = () => {
  return (
    <div>
    <h1>Perfil de Usuario</h1>
    <p>Email: usuario@ejemplo.com</p> {/* Email estático */}
    <button onClick={() => alert('Cerrando sesión...')}>Cerrar Sesión</button> {/* Botón estático */}
  </div>
  )
}

export default Profile