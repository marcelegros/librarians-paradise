import React, { Component } from 'react';
import { Redirect, withRouter } from 'react-router-dom';

import "../styles/Header.css"

class Header extends Component {

    toHome = () => {

        // let testArticle = {_id: 100, title: "The New Article", text: "The text of the new article.", creator: "Me", thumbnail: "images/April3.jpg"};
        // let testData = {genre: "essays", article: testArticle};
        // axios.post('http://localhost:8080/articles/writeArticle', testData);
        this.props.history.push("/");
    }

    state = {
        dropdown: false
    }

    openDropdown = () => {
        let dropdown = this.refs.dropdown;
        // dropdown.style.height = "100px";
        // dropdown.style.display = "block";
        this.setState({
            dropdown: true
        })
    }

    closeDropdown = () => {
        let dropdown = this.refs.dropdown;
        // dropdown.style.height = "0px";
        // dropdown.style.display = "none";
        this.setState({
            dropdown: false
        })
    }

    render = () => {

        return (
            <div>
                <div className="Header">


                    <img className="Logo" src={this.props.logo} />

                    {/* <p className="HeaderTitle" onClick = {() => {this.toHome()}} onMouseOver = {() => {this.openDropdown()}} onMouseOut = {() => {this.closeDropdown()}}>{this.props.title} </p> */}
                    
                    {[, "Merchandise", "Contact", "Training", "Stories"].map( (genre) => {
                        return <p className="HeaderOption" onClick={()=>{this.props.history.push("/"+genre.toLowerCase())}} >{genre}</p>
                    })}
                    
                </div>

                {/* TODO: Correctly style this */}
                <div style={{position: "fixed", width:"100%", height: "1px", backgroundColor: "rgba(255, 255, 255, 0.5", zIndex: 5, top: "50px"}}>
                </div>
                {/* <TransitionGroup>
                <CSSTransition
                    key={this.state.dropdown}
                    timeout={500}
                    classNames="messageout">
                <div ref="dropdown" className="HeaderDropdown">
                    Test
                </div>
                </CSSTransition>
                </TransitionGroup> */}

            </div>
        )
    }

}


export default withRouter(Header);