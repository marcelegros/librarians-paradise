import React, { Component } from 'react';

import DisplayBrowser from '../components/DisplayBrowser'

import '../styles/Home.css';

const storyImgs = ['resources/thumbnails/Stories2.jpg', 'resources/thumbnails/Stories1.jpg'];
const traningImgs = ['resources/thumbnails/Training2.jpg', 'resources/thumbnails/Training1.jpg'];
const nutritionImgs = ['resources/thumbnails/Nutrition2.jpg', 'resources/thumbnails/Nutrition1.jpg'];
const merchandiseImgs = ['resources/thumbnails/Merchandise2.jpg', 'resources/thumbnails/Merchandise1.jpg'];


class Home extends Component {


    render = () => {
        console.log(this.props.articles);

        return (
            <div style={{backgroundColor:"black"}}>


                <img className='logoSection' src='/resources/runnerLogo.png'/>


                {/* This needs an API that can serve the files in a direcoty to work right */}
                <DisplayBrowser title="Training" justify="Right" filePaths={traningImgs}/>
                <DisplayBrowser title="Nutrition" justify="Left" filePaths={nutritionImgs}/>
                <DisplayBrowser title="Stories" justify="Right" filePaths={storyImgs}/>
                <DisplayBrowser title="Merchandise" justify="Left" filePaths={merchandiseImgs}/>
                
            </div>
        )
    }
}

export default Home;
