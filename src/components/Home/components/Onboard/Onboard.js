import React, { Component } from 'react'
import './Onboard.css'

export default class Onboard extends Component {
  render() {
    return (
      <div className="homeContainer">
        <div className="welcome">
          <em>How it Works:</em>
          <div className="instructions">
            <div className="instruction">
              <h3>1.</h3>
              <p>Sign in with Google.</p>
            </div>
            <div className="instruction">
              <h3>2.</h3>
              <p>Give us your digits.</p>
            </div>
            <div className="instruction">
              <h3>3.</h3>
              <p>Ask for directions.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
