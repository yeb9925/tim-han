import React, { Component } from 'react'
import { Links, Welcome, About, Email, Project, Writing, Contact, Footer } from './'

export default class Main extends Component {
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
