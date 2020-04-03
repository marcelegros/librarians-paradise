import React, { Component } from 'react';
import { Redirect, withRouter } from 'react-router-dom';

import "../styles/Footer.css"

export default class Footer extends Component {

    render = () => {

        return (
        <div className='footerContainer'> 

            {/* Top margin */}
            <div style={{position: 'absolute', top: 0, width: '100%', backgroundColor: "rgba(255, 255, 255, 0.5", height: '2px'}}> </div>

            <div style={{position: 'absolute', left: '33%', top: '50px', color: 'white'}}> 
                    Contact Us:   <a className='contactLink' href='legrosports@gmail.com'> <i>legrosports@gmail.com</i></a>

            </div>


        </div>



    )}   


}