import React, { Component } from 'react'
import './Footer.css'

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footerContainer">
        <p id="bigText">Made By:</p>
        <p>Calum Patrick,</p>
        <p>Nicholas Lewanowicz,</p>
        <p>& Sam Wheating for Hack the North 2018 🦆.</p>
        </div>
      </div>
    )
  }
}
