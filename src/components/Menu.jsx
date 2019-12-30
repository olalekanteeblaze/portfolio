import React, { Component } from 'react';
import '../styles/menu.css';
class Menu extends Component {
    constructor(props){
        super(props)
        this.state = {
            responsive: ''
        }
        this.onNavClick = this.onNavClick.bind(this)
    }
    onNavClick(){
      if(!this.state.responsive){
          this.setState({
              responsive: 'responsive'
          })
      } else {
          this.setState({
              responsive: ''
          })
      }
    }
    render(){
        return(
            <div>
                <div className={`topnav ${this.state.responsive}`} id="myTopnav">
                    <a href="#home" className="active">HOME</a>
                    <a href="#news">ABOUT</a>
                    <a href="#contact">PORTFOLIO</a>
                    <a href="#about">BLOG</a>
                    <a href="#contact">CONTACT</a>
                    <a href className="icon" onClick={this.onNavClick}>
                        <i className="fa fa-bars"></i>
                    </a>
                </div>
                <span></span>
            </div>
        )
    }
    
}
export default Menu