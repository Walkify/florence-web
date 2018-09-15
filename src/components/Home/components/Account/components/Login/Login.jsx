import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    const {handleGoogleLogin} = this.props
    return (
      <div className="footer">
        <button onClick={handleGoogleLogin}>Login</button>
      </div>
    )
  }
}
