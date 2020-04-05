import React, { Component } from 'react';

import GameCanvas from './GameCanvas';

// Styles
import '../../styles/Game/Level.css';

// A level is capable of rendering objects, hanlding object interactions, passing them to the parent

export default class Level extends Component {

    state = {

        resourcesLoaded: false,

    }

    componentDidMount = async () => {

        // Load all resources 
        await this.props.loadAllResources();

        console.log("Finished loading resources")
        this.setState({ resourcesLoaded: true });


    }

    handleInput = (dt, player, objects) => {

        // Handle left 
        if (this.props.keyState === 'Left')
            player.location[0] -= player.speed * dt;

        // Handle Right
        if (this.props.keyState === 'Right')
            player.location[0] += player.speed * dt;
        

    }


    generateNew = () => {

    }

    checkImpact = () => {


    }

    updateObjects = (dt, player, objects) => {

        // TODO @Marcel: Do this correctly!
        player.sprite.update(dt);

    }



    // Object handlers

    updateLevel = (dt) => {

        // Update objs based on physics
        let objects = this.props.objects;
        let player = this.props.player;

        // Handle user input 
        this.handleInput(dt, player, objects);

        // Handle update of objects
        this.updateObjects(dt, player, objects);

        // Generate anything needed
        this.generateNew(dt, player, objects);

        // Check for impact
        this.checkImpact(dt, player, objects);
    
        // Pass updates to parent 
        this.props.updateObjects(dt, player, objects);


    }


    render = () => {


        return (

            // Level Container
            <div className='levelContainer'
                style={{zIndex: 100}}
                tabIndex='0'
                onClick = {(e) => this.props.onClick(e)}
                onKeyDown = {(e) => this.props.onKeyDown(e)}
                onKeyUp = {(e) => this.props.onKeyUp(e)}

            >   

                <div style={{position: 'absolute', zIndex: 2}}>{this.props.levelName} </div>

                {/* Render GameCanvas With Objects */}
                {this.state.resourcesLoaded && 
                <GameCanvas 
                    objects = {this.props.objects}
                    player = {this.props.player}
                    background = {this.props.background}

                    // Functions 
                    updateLevel = {this.updateLevel}
                />}


            </div>

        )



    }


}