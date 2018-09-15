import React, { Component } from 'react'
import './Header.css'
import logo from './logo.png'

export default class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="welcome2">
          <div className="logoImage">
            <img src={logo} alt="logo" />
          </div>
          <div className="logoText">
            <p><em>Walkify</em></p>
          </div>
        </div>
      </div>
    )
  }
}
