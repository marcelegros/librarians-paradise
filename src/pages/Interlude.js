import React, { Component } from 'react';
import { TransitionGroup, CSSTransition } from "react-transition-group";

import '../styles/Interlude.css';

const FRAME_RATE = 50

export default class Interlude extends Component {

    state = {

        currentScreen: null,
        screenIdx: 0,
        music: null,

    }

    componentDidMount = () => {

        // Begin playing interlude theme.
        if (this.props.data.music) {
            let audio = new Audio(this.props.data.music);
            audio.autoPlay = true;
            audio.load();
            audio.play();
            this.setState({ music: audio });
        
        }

        // Set the first screen 
        this.setState({
            currentScreen: this.props.data.screens[0],
            screenIdx: 0,
        })

    }

    componentDidUpdate = (prevProps) => {

        // New level? 

        if (this.props.levelIdx !== prevProps.levelIdx) {

            // Reload
            // Begin playing interlude theme.
            if (this.props.data.music) {
                let audio = new Audio(this.props.data.music);
                audio.autoPlay = true;
                audio.load();
                audio.play();
                this.setState({ music: audio });

            }

            // Set the first screen 
            this.setState({
                currentScreen: this.props.data.screens[0],
                screenIdx: 0,
            })


        }

    }

    // Navigate to the next screen
    nextScreen = () => {

        // TODO : Navigate to the next screen
        
        // Last frame? 
        if (this.state.screenIdx === (this.props.data.screens.length -1))
            this.nextLevel();

        // Else: go to the next frame
        else {
            // TODO: Transition
            const nextScreenIdx = this.state.screenIdx + 1;
            this.setState({
                screenIdx: nextScreenIdx,
                currentScreen: this.props.data.screens[nextScreenIdx]
            })
        }

    }

    // Fade out music and text, and go to the next level
    nextLevel = () => {

        // TODO: Fade out music and text 
        this.setState({ currentScreen: {image: ''}, screenIdx: -1 });
        // this.state.music.animate({volume: 0}, 1000)
        this.fadeAudio(this.state.music, 0);

        // Navigate to next lvl
        this.props.nextLevel();
    }

    // Function to smoothly fade audio
    fadeAudio = (audio, fadeLevel, fadeTime = 1000) => {

        const initialVolume = audio.volume;
        const fadeInterval = 200;
        const dimin = (initialVolume / fadeTime) * fadeInterval;

        let fader = setInterval( () => {

            // Only fade if past the fade out point or not at zero already
            if ((audio.currentTime >= fadeLevel) && (audio.volume > 0.0)) {
                if (audio.volume - dimin >= 0)
                    audio.volume -= dimin;
                else 
                    audio.volume = 0;
            }
            // When volume at zero stop all the intervalling
            if (audio.volume === 0.0) {
                clearInterval(fader);
            }
        }, fadeInterval);
    }



    render = () => {

        if (!this.state.currentScreen)
            return ''

        return (

            <TransitionGroup>
            <CSSTransition key = {this.state.screenIdx} classNames="fade" timeout={{ enter: 300, exit: 300 }} unmountOnExit>

            <div className='interludePage' onClick = {this.nextScreen} >

                {/* Render text div */}
                {this.state.currentScreen.text && 
                    <div className="interludeTextContainer">
                        { this.state.currentScreen.text }
                    </div>
                }

                {/* Render img div */}
                {this.state.currentScreen.image &&
                
                    <img className="interludeImgContainer"
                         src = {this.state.currentScreen.image}
                    />
                
                }
                

                {/* Render Children */}

            </div>

            </CSSTransition>
            </TransitionGroup>




        )


    }


}