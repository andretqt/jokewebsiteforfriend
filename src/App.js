import React, { Component } from 'react';
import './App.css';
import photoArray from "./images";
import homePhoto from '../src/picturesofsomeguyforsite/Tandentijn.jpg'
const style = {
  text: {
    position: "absolute",
    top: "50%",
    left: "50%",
    fontSize: "50px",
    color: "",
    transform: "translate(-50%,-50%)",
    background: "white",
    opacity: "1"
  }
}
console.log(photoArray.len);
class App extends Component {
  
  generateRandomPic = (e) => {
    e.preventDefault();
    document.getElementById("homeText").style.display = "none"    
    var randomIndex = Math.floor(Math.random()*photoArray.length);
    document.getElementById("overlay").style.display = "block";
    document.getElementById("random").src = photoArray[randomIndex].src;
    document.getElementById("caption").innerHTML = photoArray[randomIndex].caption;
    
    
  }
  changeDisplayState = (e) => {
    e.preventDefault();
    console.log("x button was clicked");
    document.getElementById("overlay").style.display = "none"
    document.getElementById("homeText").style.display = "block"
  }
  render() {

    return (
      <div className="App" style={{margin: "auto", marginTop: "220px"}}>
        <h1 style={{fontFamily: "Comic Sans MS"}}>Rad Van ForTijn</h1>
        <a href="https://placeholder.com"><img src={homePhoto} style={{maxHeight: "400px", maxWidth: "400px"}}/></a>
        <p id="homeText">Heb jij net zo'n mooie lach als Tijn? Draai aan het Rad van ForTijn en kom erachter!</p>
        <button onClick={this.generateRandomPic}>Draaien</button>
        <div id="overlay" style={{display: "none"}}>
          <div id="text" style={style.text}>
            <button onClick={this.changeDisplayState}>X</button>
            <p id="caption" style={{fontFamily: "Comic Sans MS", fontSize: "15px", color: "pink", paddingLeft: "25px", paddingRight:"25px"}}></p>
            <img id="random" src="" alt="photo2" style={{maxHeight: "600px", maxWidth: "600px"}}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
