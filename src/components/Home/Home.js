import React, { Component } from 'react'
import './Home.css'
import Header from './Header/Header'

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="homeContainer">
          <div className="welcome">
            <div className="logoImage">
            </div>
            <div className="logoText">
              <em>Walkify</em>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
