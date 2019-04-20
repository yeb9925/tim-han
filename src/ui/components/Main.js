import React, { Component } from 'react'
import { Links, Welcome, About, Email, Project, Writing, Contact, Footer } from './'

export default class Main extends Component {
  componentDidMount() {
    let prevScrollpos = window.pageYOffset
    let isMobile = window.innerWidth < 1200 && window.innerHeight > 1500

    window.onscroll = () => {
      let currentScrollPos = window.pageYOffset

      // Scrolling up
      if (prevScrollpos > currentScrollPos) {
        if (isMobile) {
          document.getElementById('logo-container').style.top = '55px'
          document.getElementById('hamburger-container').style.top = '90px'
        } else {
          document.getElementById('nav-bar').style.top = '0'
          document.getElementById('logo-container').style.top = '20px'
        }

        // Hide after 1.5 seconds
        setTimeout(() => {
          if (prevScrollpos === 0) {
            if (isMobile) {
              document.getElementById('logo-container').style.top = '55px'
              document.getElementById('hamburger-container').style.top = '90px'
            } else {
              document.getElementById('nav-bar').style.top = '0'
              document.getElementById('logo-container').style.top = '20px'
            }
          } else {
            if (isMobile) {
              document.getElementById('logo-container').style.top = '-170px'
              document.getElementById('hamburger-container').style.top = '-170px'
            } else {
              document.getElementById('nav-bar').style.top = '-300px'
              document.getElementById('logo-container').style.top = '-300px'
            }
          }
        }, 1500)
      // Scrolling down
      } else {
        if (isMobile) {
          document.getElementById('logo-container').style.top = '-170px'
          document.getElementById('hamburger-container').style.top = '-170px'
        } else {
          document.getElementById('nav-bar').style.top = '-300px'
          document.getElementById('logo-container').style.top = '-300px'
        }
      }
      prevScrollpos = currentScrollPos
    }
  }

  render() {
    return (
      <div id="components-container">
        {
          window.innerWidth < 1200 && window.innerHeight > 1500
            ? null
            : <Links />
        }
        {
          window.innerWidth < 1200 && window.innerHeight > 1500
            ? null
            : <Email />
        }
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
