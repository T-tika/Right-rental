import './App.css';
import { Login } from './components/login';
import { Register } from './components/signup';
import HomePage from './components/homepage';
import React, {useState} from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [showSignIn, setShowSignIn] = useState(false);
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/signup' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

