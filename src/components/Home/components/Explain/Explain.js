import React, { Component } from 'react'
import './Explain.css'
import iphone from './x.gif'

export default class Explain extends Component {
  render() {
    return (
      <div className="explain">
        <div className="explainContainer">
          <div className="explainContent">
            <h2>How it Works</h2>
            <p>Walkify allows you to navigate the world without a connection to the internet. Get walking or driving directions from anywhere to anywhere, or ask for help simply by sending a text. Sign in with you phone number and communicate with our navigation assistant but typing in an address. Want us to call an uber for you? Just let us know.</p>
          </div>
          <div className="iphone">
          <img src={iphone} alt="iphone" />
          </div>
        </div>
      </div>
    )
  }
}
