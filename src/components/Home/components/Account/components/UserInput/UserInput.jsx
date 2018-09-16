import React, { Component } from 'react'
import './UserInput.css'

export default class UserInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: null,
    }
    this.submitNumber = this.submitNumber.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  submitNumber(event) {
    console.log(this.state.number)
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({
      number: event.target.value,
    })
  }

  render() {
    const { handleGoogleLogin } = this.props
    return (
      <div className="">
        <div className="homeContainer">
          <div className="welcome3">
            <div className="leftAuth">
              <form onSubmit={this.submitNumber}>
                <label>Phone Number:</label><br />
                <input
                  className="phoneInput"
                  type="text"
                  value={this.state.value}
                  onChange={this.handleChange}
                />
                <input className="submitButton" type="submit" value="Submit" />
              </form>
            </div>
            <div className="rightAuth">
              <label>Uber Sign In:</label><br />
              <button className="submitButton">Sign in to Uber</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
