import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import Home from './pages/Home';

export default class App extends Component {

  state = {

    gameState: "waiting",

    theme: null,

  }

  beginGame = () => {

    // Engage audio

    let audio = new Audio('/audio/JustYouOld.mp3');
    audio.autoPlay = true;
    audio.load();
    audio.play();
    this.setState({ 
      theme: audio,
      gameState: 'playing'
    });

  }


  render = () => {return (
    <div >

      <Router>

        {this.state.gameState === 'waiting' && 

        <div className='beginButton'
             onClick = {this.beginGame}
          >
            Begin

        </div>
      
        }

        {this.state.gameState === 'playing' && 
          <Home  />
        }

 
      </Router>

    </div>
  );
}}

