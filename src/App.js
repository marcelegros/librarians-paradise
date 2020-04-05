import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';

import { gameFlow } from './constants/gameFlow';
import Interlude from './pages/Interlude';
import Level1 from './components/Game/Level1';

export default class App extends Component {

  state = {

    // Game flow chart
    currentLevel: null,
    currentIdx: null,

    gameState: "waiting",

    theme: null,

  }


  componentDidMount = () => {

    // Load the gameflow 
    this.setState({ 
      currentLevel: gameFlow[0],
      currentIdx: 0,
    });


  }

  beginGame = () => {

    // Engage audio

    // let audio = new Audio('/audio/JustYouOld.mp3');
    // audio.autoPlay = true;
    // audio.load();
    // audio.play();
    this.setState({ 
      // theme: audio,
      gameState: 'playing'
    });

  }


  // Navigate to the next level
  nextLevel = () => {

    // Move the the next level

    if (gameFlow.length >= this.state.currentIdx) {

      this.setState({ 
        currentLevel: gameFlow[this.state.currentIdx + 1],
        currentIdx: this.state.currentIdx + 1,
      });

    }

  }

  // Get the current level to render
  renderLevel = () => {

    if (this.state.currentLevel.levelName === 'Level1') 
        return(<Level1 />)
      
    return '';

  }


  render = () => {

    // Get current game scene 
    const currentGameRender = gameFlow[this.state.gameIndex];

    if (this.state.gameState == 'waiting')
      return (
        <div className='beginButton' onClick = {this.beginGame} >
            Begin
        </div>
      )
    
    return (

      <div >

        <Router>
            
            {/* Render Interlude  */}
            {this.state.currentLevel.type === 'interlude' ? 

              <Interlude 
                data={this.state.currentLevel}
                levelIdx={this.state.currentIdx}
                nextLevel={this.nextLevel}
              />
          
            : ''}

            {/* Render Level */}
            {this.state.currentLevel.type === 'level' ? 

              this.renderLevel()
          
            : ''}
          
  
        </Router>

      </div>
  );
}}

