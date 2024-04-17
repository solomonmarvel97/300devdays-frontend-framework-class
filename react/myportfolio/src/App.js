import './App.css';
import Home from './components/Home.js'
import About from './components/About.js'
import Portfolio from './components/Portfolio.js'
import Projects from './components/Projects.js'

import { BrowserRouter , Routes, Route } from "react-router-dom";


// utility components
import Navigation from './components/Utilities/Navigation.js'
import Footer from './components/Utilities/Footer.js'

import { useState } from 'react';

function App() {
  // const companyName = "Burger King"
  // const [name, setName] = useState('marvelous')

  const simpleCick = () => {
    alert("The button was clicked")
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
