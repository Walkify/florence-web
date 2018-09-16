import React, { Component } from 'react'
import './UserInput.css'

import { fire } from "../../../../../../config/constants";

const firebaseAuthKey = "firebaseAuthInProgress";

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
    console.log(localStorage.getItem(firebaseAuthKey));
    fire.database().ref('users/' + localStorage.getItem('appToken')).update({
      "phoneNumber": this.state.number,
    })
    event.preventDefault();
    this.setState({number: ''})
  }

  handleChange(event) {
    this.setState({
      number: event.target.value,
    })
  }

  render() {
    const { handleGoogleLogin, uberDisabled } = this.props
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
                  value={this.state.number}
                  onChange={this.handleChange}
                />
                <input className="submitButton" type="submit" value="Submit" />
              </form>
            </div>
            <div className="rightAuth">
              <label>Uber Sign In:</label><br />
              <a href={`https://login.uber.com/oauth/v2/authorize?response_type=code&client_id=aV2-ngv_423bZyLlNBfZ6iUEVoDNESdN&scope=all_trips+delivery+history+history_lite+places+profile+request+request_receipt+ride_widgets&redirect_uri=${window.location.href}`}>
                <button className={!uberDisabled ? "completedButton" : "submitButton"}>{!uberDisabled ? "Signed in already" : "Sign in to Uber"}</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
