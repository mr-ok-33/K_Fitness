// App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Activemembers from './Components/Pages/Activemembers';
import Deactivemembers from './Components/Pages/Deactivemembers';
import Allmembers from './Components/Pages/Allmembers';
import './App.css'
import Registration from './Components/Registration/Registration';
import Login from './Components/Registration/Login';
import Contact from './Components/Contact/Contact';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          {/* <Route path='/' element={<Registration />}></Route> */}
          <Route path="/allmembers" element={<Allmembers />} />
          <Route path="/activemembers" element={<Activemembers />} />
          <Route path="/deactivemembers" element={<Deactivemembers />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
