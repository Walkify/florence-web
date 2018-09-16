import React, { Component } from 'react'
import './Login.css'

export default class Footer extends Component {
  render() {
    const {handleGoogleLogin} = this.props
    return (
      <div className="loginContainer">
        <button className="signInButton" onClick={handleGoogleLogin}>Sign In With Google</button>
      </div>
    )
  }
}
