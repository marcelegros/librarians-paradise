import React, { Component } from 'react';

import Level from './Level';

// Styles
import '../../styles/Game/Level.css';

// Utils 
import { loadAllImages } from '../../utils/loading';
import { Sprite } from '../../utils/sprite';


export default class Level1 extends Level {

    // Level Vars
    gameTime = 0;


    state = {

        // Game objs
        objects: [],

        // Player
            // types = 'icon', 'sprite', ...
        player: {
            type: 'sprite',
            paths: ['/sprites/player.png'],
            speed: 200,
            location: [0, 200],
            sprite: new Sprite('/sprites/player.png', [0, 150], [46, 50], '', 10, [0,1,2,3,4,5,6,7], 'horizontal', false, '/sprites/robe.png')
        },

        // Background
            // types = 'solid', 'image', 'imageArray', 'video', 'videoArray'
        background: {
            type: 'solid',
            color: 'black'

        },

        keyState: null

    }


    componentDidMount = () => {

        
    }


    loadAllResources = async () => {

        // Find unique image urls
        let uniquepaths = this.state.objects.map( obj => obj.path);
        for (let path of this.state.player.paths)
            uniquepaths.push(path);

        uniquepaths = uniquepaths.filter( path => (path !== null && path !== undefined));

        // Load the images
        console.log("Loading paths: ", uniquepaths)
        let loadedImages = await loadAllImages(uniquepaths);
        console.log(loadedImages)

        // Set all images 
        let objects = this.state.objects;
        let player = this.state.player;
        objects.map (obj => {
            if (Object.keys(loadedImages).includes(obj.path))
                obj.image = loadedImages[obj.path];

        });
        if (Object.keys(loadedImages).includes(player.paths[0])) {
            player.image = loadedImages[player.paths[0]];
            player.sprite.img = loadedImages[player.paths[0]];
        }
        if (player.paths.length > 1 && Object.keys(loadedImages).includes(player.paths[1])) {
            player.wardrobeImg = loadedImages[player.paths[1]];
            player.sprite.wardrobeImg = loadedImages[player.paths[1]];
        }


        await this.setState({ objects: objects , player: player})

    }


    updateObjects = (dt, player, objects) => {

        // Update game time

        // TODO : Do this better
        this.setState({
            player: player
        })

    }


    onKeyDown = async (e) => {

        let key;
        if (e.key === "ArrowLeft")
            key = "Left";
        else if (e.key === 'ArrowRight')
            key = 'Right'
        else if (e.key === 'ArrowUp')
            key = 'Up'
        else if (e.key === 'ArrowDown')
            key = 'Down'

        if (key)
            this.setState({ keyState: key });

    }

    onClick = (e) => {

        // If mobile
        if (window.innerWidth < 700) {

            if (this.state.keyState) {
                this.setState({ keyState: null });
                return;
            }

            else if (e.clientX > window.innerWidth / 2) {
                this.setState({ keyState: 'Right' });
                return;
            }

            else if (e.clientX < window.innerWidth / 2) {
                this.setState({ keyState: 'Left' });
                return;
            }

        }

    }

    onKeyUp = (e) => {

        this.setState({ keyState: null });
        
    }


    render = () => {

        return (

            <div className='level1Container'>

                <Level 
                    levelName = {"Level One"}
                    objects = {this.state.objects}
                    player = {this.state.player}
                    background = {this.state.background}
                    keyState = {this.state.keyState}

                    // Update Functions
                    loadAllResources = {this.loadAllResources}
                    updateObjects = {this.updateObjects}

                    onKeyDown = {this.onKeyDown}
                    onKeyUp = {this.onKeyUp}
                    onClick = {this.onClick}

                />

            </div>

        )



    }


}