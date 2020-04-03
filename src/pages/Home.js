import React, { Component } from 'react';

import '../styles/Home.css';

const FRAME_RATE = 50

class Home extends Component {

    state = {

        audioFile: null,

        objects: [{
            location: {x: 0, y: 0},
            velocity: {x: 200, y: 100}, 
            width: 400,
            aspectRatio: 1
        }],

        player: {
            location: {x: 0, y: 20}
        }

    }

    componentDidMount = () => {

        this.interval = setInterval(this.updateJames, 1000/FRAME_RATE);
          
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    updateJames = () => {

        let newObjects = [];

        for (let object of this.state.objects) {

            const height = object.width / object.aspectRatio;

            // Get the new location
            const deltaX = object.velocity.x / FRAME_RATE;
            const deltaY = object.velocity.y / FRAME_RATE;
            object.location = {x: object.location.x + deltaX, y: object.location.y + deltaY};

            // If hitting wall: bounce!
            let hitWall = false;
            if (object.location.x + object.width > window.innerWidth || object.location.x < 0){
                object.velocity.x = -object.velocity.x;
                hitWall = true;
            }
            if (object.location.y + height > window.innerHeight || object.location.y < 0) {
                object.velocity.y = -object.velocity.y;
                hitWall = true;
            }

            // If hit wall, break into a second piece
            if (false) { 
                let obj1 = {...object, width: object.width/2};
                let obj2 = {...obj1,  location:{x: obj1.location.x+obj1.width, y:obj1.location.y}};
                newObjects.push(obj1);
                newObjects.push(obj2);
            }

            else
                newObjects.push(object);

        }

        console.log(newObjects.length)

        this.setState({
            objects: newObjects
        })
    }

    setAspectRatio = (objectIdx) =>{

        console.log("idx: ", objectIdx);
        let objects = this.state.objects;
        console.log(this.refs)
        const imageRef = this.refs["object_" + objectIdx];
        objects[objectIdx].aspectRatio = imageRef.width / imageRef.height;
        this.setState({
            objects: objects
        })

        console.log("Aspect: ", imageRef.width / imageRef.height);
    }


    render = () => {

        return (
            <div className="gameGround">
                {this.state.objects.map( (object,idx) => { return(

                    <div className='gifContainer' 
                        style = {{
                            left: object.location.x,
                            top : object.location.y,
                            width: object.width
                        }}
                    >
                        <img style={{width: '100%'}} ref={"object_"+idx} src='https://media.giphy.com/media/l1IY2yT4fAo66oDPG/giphy.gif'
                            onLoad = {() => this.setAspectRatio(idx)}
                        />
                    </div>)


                })}

                <div className='playerContainer'
                    style = {{
                        left: this.state.player.location.x,
                        bottom: this.state.player.location.y
                    }}
                >
                    <img style={{width: '100%'}} src='https://media.giphy.com/media/de5S6SQdUVvBvLjJ3x/giphy.gif' />
                    
                </div>
    
            </div>
        )
    }
}

export default Home;
