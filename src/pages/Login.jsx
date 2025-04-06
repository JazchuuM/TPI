import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);

    // Aquí podrías manejar la autenticación
    navigate('/principal');
  };

  return (
    <div className="container">
      <div className="login-box">
        <h2>Iniciar sesión</h2>

        <div className="login-links">
          ¿No tienes una cuenta? <Link to="/registro">Haz clic aquí</Link>
        </div>

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
          <button type="submit" className="login-btn">Iniciar sesión</button>
        </form>

        <div className="forgot-password">
          <Link to="/recuperacion">¿Te olvidaste tu contraseña? Recuperala aquí.</Link>
        </div>
      </div>

     
        <img src="/user.jpg" alt="Usuario" />
      
    </div>
  );
};

export default Login;
