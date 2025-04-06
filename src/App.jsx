import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Registro from './pages/Registro';
import Recuperacion from './pages/Recuperacion';
import Principal from './pages/Principal';
import Login from './pages/Login';


import './pages/Principal.css';
import './index.css'
import './pages/Login.css';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/recuperacion" element={<Recuperacion />} />
        <Route path="/principal" element={<Principal />} />
      </Routes>
    </Router>
  );
}

export default App;