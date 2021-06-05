import logo from './logo.svg';
import ReactDOM from 'react-dom';
import React from 'react';
import './App.css';

class App extends React.Component {
  return(){
    <div className="container">

      <div id = "quote-box">
      <div id="text">
          
          <p><i className="fas fa-quote-left"></i> this is a sample text page with an auther</p>
          </div>
          <div id="auther">
            <p>- Aditya </p>
          </div>
          
          <div id="links">
              <a href="https://twitter.com/?lang=en"  id= "tweet-quote" className="link" target ="_blank"><i className="fab fa-twitter"></i></a>
            
            
              <a href="#" id="tumblear" className="link"><i className="fab fa-tumblr"></i></a>
          
            <button className="link" id="new-quote" onClick={colorrgb()}>New quote</button>
            
          
          </div>

          
      </div>  

      <div id="para">
        <p>By Aditya</p>
      </div>
    </div>
  }
}

function colorrgb(){
  var container = document.getElementsByClassName(".container");

  container.innerHTML = "rgb(" +
  Math.floor(Math.random()*255) + "," +
  Math.floor(Math.random()*255) + "," +
  Math.floor(Math.random()*255) + ")";

  document.body.style.backgroundColor = container.innerHTML ;
}

export default App;
