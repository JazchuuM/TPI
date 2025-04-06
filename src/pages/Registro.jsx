import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom'; 

const Registro = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    console.log('Email:', email);
    console.log('Password:', password);

 
    navigate('/login'); 
  };

  return (
    <div className="container">
      <div className="login-box">
        <h2>Crear Cuenta</h2>
        <p>¿Ya tienes una cuenta? <a href="/login">Haz click aquí</a></p> 
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Ingresa tu email"
            />
          </div>
          <div className="input-group">
            <label>Contraseña:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Ingresa tu contraseña"
            />
          </div>
          <div className="input-group">
            <label>Confirmar Contraseña:</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              placeholder="Confirma tu contraseña"
            />
          </div>
          <button type="submit" className="login-btn">Registrarse</button>
        </form>
      </div>
      
        <img src="/user.jpg" alt="Usuario" />
      </div>
    
  );
};

export default Registro;
