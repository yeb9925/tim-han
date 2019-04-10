import React, { Component } from 'react'
import { Link } from 'react-scroll'

export default class Navigation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menuClicked: false
    }
    this.onMenuClick = this.onMenuClick.bind(this)
  }

  onMenuClick() {
    this.setState({ menuClicked: !this.state.menuClicked })
  }
  
  render() {
    if (window.innerWidth < 1200) {
      return (
        <div id="nav-container">
          <div id="logo-container">
            <div className="logo">
              <a href="https://yeb9925.github.io/tim-han/">
                <img className="logo-image" src="./logo.png"/>
              </a>
            </div>
          </div>
          <div id="hamburger-container" onClick={this.onMenuClick}>
            <div className="hamburger">
              <img className="hamburger-image" src="./mobile-assets/hamburger.png"/>
            </div>
          </div>
          {
            this.state.menuClicked
              ? (
                <nav id="nav-bar">
                  <div id="close-button-container" onClick={this.onMenuClick}>
                    <div className="close-button">
                      <img className="close-button-image" src="./mobile-assets/mobile-close-button.png"/>
                    </div>
                  </div>
                  <Link to="welcome-container" activeClass="active" spy={true} smooth={true} className="nav-links" onClick={this.onMenuClick}>Home</Link>
                  <Link to="about-container" activeClass="active" spy={true} smooth={true} className="nav-links" onClick={this.onMenuClick}>About</Link>
                  <Link to="project-container" activeClass="active" spy={true} smooth={true} className="nav-links" onClick={this.onMenuClick}>Project</Link>
                  <Link to="writing-container" activeClass="active" spy={true} smooth={true} className="nav-links" onClick={this.onMenuClick}>Writing</Link>
                  <Link to="contact-container" activeClass="active" spy={true} smooth={true} className="nav-links" onClick={this.onMenuClick}>Contact</Link>
                </nav>
              )
              : null
          }
          {
            this.props.children
          }
        </div>
      )
    } else {
      return (
        <div id="nav-container">
          <div id="logo-container">
            <div className="logo">
              <a href="https://yeb9925.github.io/tim-han/">
                <img className="logo-image" src="./logo.png"/>
              </a>
            </div>
          </div>
          <nav id="nav-bar">
            <Link to="welcome-container" activeClass="active" spy={true} smooth={true} className="nav-links">Home</Link>
            <Link to="about-container" activeClass="active" spy={true} smooth={true} className="nav-links">About</Link>
            <Link to="project-container" activeClass="active" spy={true} smooth={true} className="nav-links">Project</Link>
            <Link to="writing-container" activeClass="active" spy={true} smooth={true} className="nav-links">Writing</Link>
            <Link to="contact-container" activeClass="active" spy={true} smooth={true} className="nav-links">Contact</Link>
          </nav>
          {
            this.props.children
          }
        </div>
      )
    }
  }
}
