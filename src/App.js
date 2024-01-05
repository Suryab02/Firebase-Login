import React from 'react';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import './App.css';
import RegisterPage from './RegisterPage';
import LoginPage from './LoginPage';
import Home from './Home';
function App() {
  return (
    <BrowserRouter>

    <Routes>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/"  element={<Home />} />
        </Routes>
    </BrowserRouter>

  );
}

export default App;
