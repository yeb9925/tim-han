import React, { Component } from 'react'
import { Links, Welcome, About, Email, Project, Writing, Contact, Footer } from './'

export default class Main extends Component {
  componentDidMount() {
    var prevScrollpos = window.pageYOffset;
    window.onscroll = () => {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("nav-bar").style.top = "0";
        document.getElementById("logo-container").style.top = "20px";
      } else {
        document.getElementById("nav-bar").style.top = "-100px";
        document.getElementById("logo-container").style.top = "-100px";
      }
      prevScrollpos = currentScrollPos;
    }
  }

  render() {
    return (
      <div id="components-container">
        <Links />
        <Email />
        <Welcome />
        <About />
        <Project />
        <Writing />
        <Contact />
        <Footer />
      </div>
    )
  }
}
