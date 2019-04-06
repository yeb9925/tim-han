import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div id="about-container">
        <div className="about">
          <h1 className="about-header">About<span><hr/></span></h1>
        </div>
        <div className="about-description">
          <p className="about-paragraph">
            {'Greetings! \I\'m Tim, a software engineer based in New York, NY, who enjoys building applications with variety of modern technologies. I develop web applications, tools, and microservices that will be great help for other developers and beginners.'}
          </p>
        </div>
        <div className="about-description">
          <p className="about-paragraph">
            {'After I graduated from '}
            <span><a href="https://www.qc.cuny.edu/Pages/home.aspx" target="_blank" style={{color: '#45ce95', textDecoration: 'none'}}>{'Queens College'}</a></span>
            {' with Bachelor\'\s Degree in Mathematics with minor in Computer Science, I joined the Engineering Team at '}
            <span><a href='https://unified.com/' target='_blank' style={{color: '#45ce95', textDecoration: 'none'}}>{'Unified'}</a></span>
            {' where I grew substantially by learning curtting-edge technologies, software development process, and debugging.'}
          </p>
        </div>
        <div className="about-description">
          <p className="about-paragraph">
            {'Here are technologies and tools I use:'}
          </p>
        </div>
        <div className="about-description">
          <ul className="skill-list">
            <li className="skill">Python</li>
            <li className="skill">JavaScript</li>
            <li className="skill">Golang</li>
            <li className="skill">SQL</li>
            <li className="skill">Node.js</li>
            <li className="skill">React & Vue</li>
            <li className="skill">HTML & CSS</li>
            <li className="skill">Neo4J</li>
            <li className="skill">Kafka/Kafka Manager</li>
            <li className="skill">AWS</li>
            <li className="skill">Jenkins</li>
          </ul>
        </div>
      </div>
    )
  }
}
