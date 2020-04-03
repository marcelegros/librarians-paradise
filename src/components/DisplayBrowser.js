import React, { Component } from 'react';
import { Redirect, withRouter } from 'react-router-dom'

import "../styles/DisplayBrowser.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";



class DisplayBrowser extends Component {

    state = {
        displayIdx: 0
    }

    componentDidMount() {
        this.interval = setInterval(() => this.rotateDisplay(), 5000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    rotateDisplay = () => {
        let newIdx = (this.state.displayIdx + 1) % this.props.filePaths.length;
        this.setState({
            displayIdx: newIdx
        })
    }


    routeToArticle = async (article) => {
        // let redirect = "/articles/" + this.props.genre + "/" + article._id;
        // this.props.history.push(redirect);

        return;
    }

    render = () => {

        if (this.state.redirect) {
            return <Redirect to={this.state.redirect}/>
        }
        
        return (

            <div style={{diplay: "inline-block"}}>


                <div style={{width: "100vw", height: "45px", position: "relative", marginBottom: "15px"}}>
                {this.props.justify==="Left" ? 
                    <h1 style={{position: "absolute",  left: "50%", top: 0, fontFamily: "Baskerville", padding: "0px 0px 15px 10px"}}> {this.props.title} </h1>
                   : <h1 style={{position: "absolute", left: 0, top: 0, fontFamily: "Baskerville", padding: "0px 0px 15px 10px"}}> {this.props.title} </h1>}
                </div>


                <div className="DisplayContainer">

                    <TransitionGroup>
                    <CSSTransition
                        key={this.state.displayIdx}
                        timeout={2000}
                        classNames="messageout">
                    <div style={{ left: this.props.justify==="Left" ? "0" : "50%" }} className="ImgContainer" onClick={() => {}}>
                        <img className="DisplayImg"  src = {this.props.filePaths[this.state.displayIdx]}/>
                        <p className="DisplayLabel"> {"View " + this.props.title} </p>
                    </div>
                    </CSSTransition>
                    </TransitionGroup>

                    <TransitionGroup>
                    <CSSTransition
                        key={this.state.displayIdx}
                        timeout={2000}
                        classNames="messageout">
                    <div style={{ left: this.props.justify==="Left" ? "50%" : "0" }} className="ArticleContainer">
                        <h1 style={{fontSize: "20px", color: "rgba(243, 191, 20)"}}>{this.props.title + " title"}</h1>
                        <p style={{fontSize: "12px", paddingLeft:"40px", paddingRight: "40px"}}> {this.props.title + " preview"}</p>
                    </div>
                    </CSSTransition>
                    </TransitionGroup>

                </div>
                

            </div>
        )
    }
}

export default withRouter(DisplayBrowser);