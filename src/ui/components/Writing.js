import React, { Component } from 'react'

export default class Writing extends Component {
  render() {
    return (
      <div id="writing-container">
        <div className="writing">
          <h1 className="writing-header">Writing<span><hr/></span></h1>
        </div>
        <div className="writing-info-container">
          <p className="writing-info">{'I\'\m an active writer on Medium writing about instructive contents related to programming for those entering into the coding world and learning more about programming. Currently, I write for multiple publications including '}
          <span><a className="info" href="https://hackernoon.com" target="_blank" style={{color: '#45ce95', textDecoration: 'none'}}>{'Hackernoon, '}</a></span>
          <span><a className="info" href="https://medium.freecodecamp.org" target="_blank" style={{color: '#45ce95', textDecoration: 'none'}}>{'freeCodeCamp, '}</a></span>
          <span><a className="info" href="https://medium.com/javascript-in-plain-english" target="_blank" style={{color: '#45ce95', textDecoration: 'none'}}>{'JavaScript In Plain English, '}</a></span>
          {' and more. Feel free to check out my Medium'}
          <span><a className="info" href="https://medium.com/@timhancodes" target="_blank" style={{color: '#45ce95', textDecoration: 'none'}}>{' profile '}</a></span>
          {'for all my published contents!'}
          </p>
        </div>
        <div className="writing-one">
          <div className="writing-image-container">
            <a href="https://medium.com/javascript-in-plain-english/javascript-merge-sort-3205891ac060" target="_blank">
              <img className="writing-image" src="/writing-images/writing1.png" />
            </a>
          </div>
          <div className="writing-description-one">
            <h3 className="writing-publication"><span><a href="https://medium.com/javascript-in-plain-english" target="_blank" style={{color: '#45ce95', textDecoration: 'none'}}>JavaScript In Plain English</a></span></h3>
            <h2 className="writing-title"><span><a href="https://medium.com/javascript-in-plain-english/javascript-merge-sort-3205891ac060" target="_blank" style={{color: '#e6f1fe', textDecoration: 'none'}}>Merge Sort Algorithm in JavaScript</a></span></h2>
            <p className="writing-text">Sorting algorithms are very important to know and implement. Learn about merge sort and how to implement it using JavaScript!</p>
          </div>
        </div>
        <div className="writing-one">
          <div className="writing-description-two">
            <h3 className="writing-publication"><span><a href="https://hackernoon.com/" target="_blank" style={{color: '#45ce95', textDecoration: 'none'}}>Hackernoon</a></span></h3>
            <h2 className="writing-title"><span><a href="https://hackernoon.com/3-programming-languages-to-learn-in-2019-2eb035936f65" target="_blank" style={{color: '#e6f1fe', textDecoration: 'none'}}>3 Programming Languages to Learn in 2019</a></span></h2>
            <p className="writing-text">Here are my list of 3 languages you should pick up in 2019!</p>
          </div>
          <div className="writing-image-container">
            <a href="https://hackernoon.com/3-programming-languages-to-learn-in-2019-2eb035936f65" target="_blank">
              <img className="writing-image" src="/writing-images/writing2.png" />
            </a>
          </div>
        </div>
        <div className="more-writing-container">
          <div className="more-writing">
            <h1 className="more-writing-text"><a href="https://medium.com/@timhancodes" target="_blank" style={{color: '#0e162f', textDecoration: 'none'}}>More</a></h1>
          </div>
        </div>
      </div>
    )
  }
}
