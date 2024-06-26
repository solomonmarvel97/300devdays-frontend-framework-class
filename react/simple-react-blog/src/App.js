import profileImage from './assets/images/profileImage.png';
import './App.css';
import '../src/assets/css/Form.css';

// components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import { useEffect, useState } from 'react';
import Blog from './components/Blog';

function App() {
  const companyName = "Burger King"
  const [name, setName] = useState('John Doe')

  const simpleCick = () => {
    alert("The button was clicked")
  }

  const AnotherSimpleCick = (name) => {
    setName(name)
    alert("The button was clicked by " + name)
  }

  useEffect(() => {
    console.log('the name was changed')
  }, [name])


  return (
    <div className="App">
      <Navbar />
      <img src={profileImage} className='logo' />
      <h1>Welcome To {companyName}, {name}</h1>
      <p>This is our simple web page. Thanks for joining in.</p>
      <div style={
        {
          display: "flex",
          justifyContent: "center",
          gap: "8px"
        }
      }>

        <button style={{
          color: "white",
          backgroundColor: "black"
        }} className='btn primary' onClick={simpleCick}>Click here for magic</button>

        <button className='btn primary' onClick={() => {
          AnotherSimpleCick("John")
        }}>Click For Another Magic</button>
      </div>

      <p>Name: {name}</p>
      <button onClick={() => {setName("Marvelous")}}>Change Name</button>

      <Blog/>

      <Footer />
    </div>
  );
}

export default App;
