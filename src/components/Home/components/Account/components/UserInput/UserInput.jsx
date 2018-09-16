import React, { Component } from 'react'
import './UserInput.css'

const firebaseAuthKey = "firebaseAuthInProgress";

export default class UserInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: null,
      uberAuth: false,
    }
    this.submitNumber = this.submitNumber.bind(this);
    this.submitUberw
    this.handleChange = this.handleChange.bind(this);
  }

  submitNumber(event) {
    console.log(this.state.number)
    console.log(localStorage.getItem(firebaseAuthKey));
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({
      number: event.target.value,
    })
  }

  render() {
    const { handleGoogleLogin } = this.props
    const buttonMessage = this.props.uberDisabled ? "Sign in to Uber" : "Authorized!"
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
              <a href={`https://login.uber.com/oauth/v2/authorize?client_id=aV2-ngv_423bZyLlNBfZ6iUEVoDNESdN&response_type=code&scope=profile&grant_type=authorization_code&redirect_uri=${window.location.href}`}>
                <button href="#" className={this.state.uberAuth ? "completedButton" : "submitButton"}>{this.state.uberAuth ? "Signed in already" : "Sign in to Uber"}</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
