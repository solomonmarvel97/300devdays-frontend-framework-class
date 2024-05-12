import profileImage from './assets/images/profileImage.png';
import './App.css';
import '../src/assets/css/Form.css';

// components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import { useState } from 'react';
import Blog from './components/Blog';

function App() {
  const companyName = "Burger King"
  const [name, setName] = useState('marvelous')

  const simpleCick = () => {
    alert("The button was clicked")
  }

  const AnotherSimpleCick = (name) => {
    setName(name)
    alert("The button was clicked by " + name)
  }


  return (
    <div className="App">
      <Navbar />
      <img src={profileImage} className='logo' />
      <h1>Welcome To {companyName}, {name}</h1>
      <p>This is our simple web page. Thanks for joining in.</p>
      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "8px"
      }}>

        <button style={{
          color: "white",
          backgroundColor: "black"
        }} className='btn primary' onClick={simpleCick}>Click here for magic</button>

        <button className='btn primary' onClick={() => {
          AnotherSimpleCick("Ella & Amaka")
        }}>Click For Another Magic</button>
      </div>

      <Blog/>

      <Footer />
    </div>
  );
}

export default App;
