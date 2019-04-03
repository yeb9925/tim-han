import React, { Component } from 'react'

export default class Welcome extends Component {
  render() {
    return (
      <div id="welcome-container">
        <div className="first-paragraph-container">
          <div>
            <h1 className="first-line">Hi, my name is</h1>
            <h1 className="second-line">Tim Han</h1>
            <h1 className="third-line">Software Engineer</h1>
          </div>
          <div>
            <img className="profile-pic" src="profile.png"/>
          </div>
        </div>
        <div>
          <p className='fourth-line'>
            {'\I\'m a software engineer based in NYC, NY specializing in building web (front-end and back-end) and data-related applications. I currently work at '}
            <span><a href='https://unified.com/' target='_blank' style={{color: '#45ce95', textDecoration: 'none'}}>{'Unified'}</a></span>
            {' as a Software Engineer.'}
          </p>
        </div>
      </div>
    )
  }
}
