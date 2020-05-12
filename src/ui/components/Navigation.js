import React, { Component } from 'react'
import { Link } from 'react-scroll'

export default class Navigation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menuClicked: false
    }
    this.onMenuClick = this.onMenuClick.bind(this)
    this.onClickOutside = this.onClickOutside.bind(this)
  }

  onMenuClick() {
    this.setState({ menuClicked: !this.state.menuClicked })
  }

  onClickOutside() {
    if (this.state.menuClicked) {
      this.setState({ menuClicked: false })
    }
  }
  
  render() {
    let isBlog = false
    if(this.props.children.props.children[0].props.path) {
      isBlog = true
    }
    
    if (window.innerWidth < 1200 && window.innerHeight > 1500) {
      return (
        <div id="nav-container">
          { isBlog ? <div></div> : <div className="nav-bar-outside-container" onClick={this.onClickOutside}></div> }
          
          {
            isBlog
              ? <div></div>
              : <div id="logo-container">
                  <div className="logo">
                    <a href="https://yeb9925.github.io/tim-han/">
                      <img className="logo-image" src="./logo.png"/>
                    </a>
                  </div>
                </div>
          }
          {
            isBlog
              ? <div></div>
              : <div id="hamburger-container" onClick={this.onMenuClick}>
                  <div className="hamburger">
                    <img className="hamburger-image" src="./mobile-assets/hamburger.png"/>
                  </div>
                </div>
          }
          {
            this.state.menuClicked || !isBlog
              ? (
                <nav id="nav-bar">
                  <div id="close-button-container" onClick={this.onMenuClick}>
                    <div className="close-button">
                      <img className="close-button-image" src="./mobile-assets/mobile-close-button.png"/>
                    </div>
                  </div>
                  <Link to="welcome-container" spy={true} smooth={true} className="nav-links" onClick={this.onMenuClick}>Home</Link>
                  <Link to="about-container" spy={true} smooth={true} className="nav-links" onClick={this.onMenuClick}>About</Link>
                  <Link to="project-container" spy={true} smooth={true} className="nav-links" onClick={this.onMenuClick}>Project</Link>
                  <Link to="writing-container" spy={true} smooth={true} className="nav-links" onClick={this.onMenuClick}>Writing</Link>
                  <Link to="contact-container" spy={true} smooth={true} className="nav-links" onClick={this.onMenuClick}>Contact</Link>
                  <div className="resume-link-container">
                    <a href="./TimHanResume.pdf" target="_blank" className="resume-link" onClick={this.onMenuClick}>Resume</a>
                  </div>
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
          {
            isBlog 
              ? <div></div> 
              : <div id="logo-container">
                  <div className="logo">
                    <a href="https://yeb9925.github.io/tim-han/">
                      <img className="logo-image" src="./logo.png"/>
                    </a>
                  </div>
                </div>
          }

          {
            isBlog
              ? <div></div>
              : <nav id="nav-bar">
                  <Link to="welcome-container" spy={true} smooth={true} className="nav-links">Home</Link>
                  <Link to="about-container" spy={true} smooth={true} className="nav-links">About</Link>
                  <Link to="project-container" spy={true} smooth={true} className="nav-links">Project</Link>
                  <Link to="writing-container" spy={true} smooth={true} className="nav-links">Writing</Link>
                  <Link to="contact-container" spy={true} smooth={true} className="nav-links">Contact</Link>
                  <div className="resume-link-container">
                    <a href="./TimHanResume.pdf" target="_blank" className="resume-link" onClick={this.onMenuClick}>Resume</a>
                  </div>
                </nav>
          }
          {
            this.props.children
          }
        </div>
      )
    }
  }
}
