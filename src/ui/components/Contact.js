import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
      <div id="contact-container">
        <div className="contact">
          <h1 className="contact-header">Get In Touch!<span></span></h1>
        </div>
        <div className="contact-description">
          <p className="contact-paragraph">
            {'I\'\m open to any freelance work like making websites like this. Feel free to reach me out on any platform for any questions, advice, and/or talk. My inbox is always opened!'}
          </p>
        </div>
        <div className="contact-email-container">
          <div className="contact-email">
            <h1 className="scontact-me"><a href="mailto:seungt.han@gmail.com" style={{textDecoration: 'none', color: '#45ce95'}}>Contact</a></h1>
          </div>
        </div>
      </div>
    )
  }
}
