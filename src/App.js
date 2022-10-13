import React from 'react';
import Home from './pages/Home';
import Stats from './pages/Stats';
import { Routes, Route, NavLink } from "react-router-dom";
import {NavBarStyle} from './styles/NavBar.style';

import './App.css';

function Navigation() {
  return (
    <NavBarStyle>
      <ul>
        <li>
            <NavLink to="/">Home</NavLink>
        </li>
        <li>
            <NavLink to="/stats">Stats</NavLink>
        </li>
      </ul>
    </NavBarStyle>
    
  );
}

function App() {
  return (
    <React.Fragment>
      <Navigation />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="*" element={<p>404</p>} />
      </Routes>
    </React.Fragment>
    
  );
}

export default App;