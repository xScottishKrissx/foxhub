// import logo from './logo.svg';
import './App.css';
// import backgroundImage from '../../assets/backgroundImage.jpeg'
import test from './assets/background_image.jpeg'
import React from 'react';

function App() {
const imgUrl = "./assets/background_image.jpeg";

console.log("Render")

  const style = {
    backgroundImage: 'url(' + imgUrl + ')',
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "auto",
    // maxWidth:"1200px",
    width:"100%",
  }

  return (
    <div className="App" style={style}>
     <div className="wrapper" style={style}>
       <div className="header" style={style}>
         <h1>Section 1</h1>
      </div>
       <div><h1>Section 2</h1></div>
       <div><h1>Section 3</h1></div>
       <div><h1>Section 4</h1></div>

       <div><h1>Section 5</h1></div>
       <div><h1>Section 6</h1></div>
       <div><h1>Section 7</h1></div>
       <div><h1>Section 8</h1></div>
     </div>
    </div>
  );
}

export default App;
