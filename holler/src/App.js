import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import WelcomeMessage from './Components/WelcomeMessage';
import Dashboard from './Components/Dashboard';
import About from './Components/About';
import 'leaflet/dist/leaflet.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<WelcomeMessage/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </Router>
    </div>
  );
}


export default App;
