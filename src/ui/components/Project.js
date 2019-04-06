import React, { Component } from 'react'

export default class Project extends Component {
  render() {
    return (
      <div id="project-container">
        <div className="project-header-container">
          <h1 className="project-header">Project<span><hr/></span></h1>
        </div>
        <div className="project-one">
          <div className="project-image-container">
            <a href="http://koreank9rescue.org" target="_blank">
              <img className="project-image" src="/project-images/project1.png" />
            </a>
          </div>
          <div className="project-description-one">
            <h3 className="project-featured" style={{color: '#45ce95', textDecoration: 'none'}}>Featured Project</h3>
            <h2 className="project-title"><span><a href="http://koreank9rescue.org" target="_blank" style={{color: '#e6f1fe', textDecoration: 'none'}}>Korean K9 Rescue, Inc.</a></span></h2>
            <p className="project-text">Website developed for a non-profit organization that rescues dogs and find the right home for them in US.</p>
          </div>
        </div>
        <div className="project-one">
          <div className="project-description-two">
            <h3 className="project-featured" style={{color: '#45ce95', textDecoration: 'none'}}>Featured Project</h3>
            <h2 className="project-title"><span><a href="https://game-night-friends.herokuapp.com" target="_blank" style={{color: '#e6f1fe', textDecoration: 'none'}}>Game Night</a></span></h2>
            <p className="project-text">Web App made to help bring table top games and real-time interaction together for friends to enjoy game night online.</p>
          </div>
          <div className="project-image-container">
            <a href="https://game-night-friends.herokuapp.com" target="_blank">
              <img className="project-image" src="/project-images/project2.png" />
            </a>
          </div>
        </div>
        <div className="more-project-container">
          <div className="more-project">
            <h1 className="more-project-text"><a href="https://github.com/yeb9925" target="_blank" style={{color: '#0e162f', textDecoration: 'none'}}>More Projects</a></h1>
          </div>
        </div>
      </div>
    )
  }
}
