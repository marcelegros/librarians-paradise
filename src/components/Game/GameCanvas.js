import React, { Component } from 'react';


// Styles
import '../../styles/Game/GameCanvas.css';

// A screen is responsible for handling the constant rendering of a game state. 

const FRAME_RATE = 10;

export default class GameCanvas extends Component {


    // Render vars
    lastT;


    state = {

        canvasDims: [1000, 1000],

    }

    componentDidMount = () => {
        
        this.renderLoop();
    }

    componentWillUnmount() {
    }


    renderLoop = () => {

        const now = Date.now();
        const dt = (now - this.lastT) / 1000.0;

        this.props.updateLevel(dt);
        this.renderGame();

        this.lastT = now;
        requestAnimationFrame(this.renderLoop);
    }


    // Main Game Render Function
    renderGame = () => {

        // Get canvas
        const canvas = this.refs.gameCanvas;
        const ctx = canvas.getContext('2d');

        // Background 
        // TODO: Only re-render background if needed! (non-solid and player moved, etc.)
        this.renderBackground(this.props.background, ctx);

        // Render the player
        this.renderSpriteEntity(ctx, this.props.player);


    }

    // Render any given sprite entity
    renderSpriteEntity = (ctx, entity) => {
        // ctx.save();
        // ctx.translate(entity.location[0], entity.location[1]);

        entity.sprite.render(ctx, entity.location);
        ctx.restore();
    }


    // Background rendering
    renderBackground = (background, ctx) => {

        // Solid Background
        if (background.type === 'solid') {

            ctx.beginPath();
            ctx.rect(0, 0, this.state.canvasDims[0], this.state.canvasDims[1]);
            ctx.fillStyle = background.color;
            ctx.fill();
        }
    }


    // Get game background to render 


    render = () => {

        return (

            <div className='gameCanvasContainer'>

                {/* Game Canvas */}
                <canvas 
                    ref = "gameCanvas"
                    className = "gameCanvas"
                    width = {this.state.canvasDims[0]}
                    height = {this.state.canvasDims[1]}
                />

                {/* <img src = {this.props.player.sprite.img.src} style={{position: 'absolute', top: 0, left: 0, zIndex: 50, width: '100px', height: '100px'}}/> */}


            </div>

        )



    }


}