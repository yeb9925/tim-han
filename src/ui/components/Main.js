import React, { Component } from 'react'
import { Links, Welcome, Skill, Project, Writing, About, Contact } from './'

export default class Main extends Component {
  render() {
    return (
      <div id="components-container">
        <Links />
        <Welcome />
        <Skill />
        <Project />
        <Writing />
        <About />
        <Contact />
      </div>
    )
  }
}
