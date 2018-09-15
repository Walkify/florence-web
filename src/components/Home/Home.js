import React, { Component } from 'react'
import './Home.css'
import Header from './Header/Header'
import Explain from './Explain/Explain'

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="sep-1" />
        <Explain />
        
        <div className="homeContainer">
          <div className="welcome">
            <div className="logoImage">
            </div>
            <div className="logoText">
              <em>Get Started:</em>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
