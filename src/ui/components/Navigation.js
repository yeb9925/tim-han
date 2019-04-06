import React, { Component } from 'react'
import { Link } from 'react-scroll'

export default class Navigation extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <div id="nav-container">
        <div id="logo-container">
          <div className="logo">
            <img className="logo-image" src="/logo.png"/>
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
