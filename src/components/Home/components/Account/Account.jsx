import React, { Component } from 'react'
import { Login, UserInput} from './components'
import {fire, firebaseAuth, loginWithGoogle} from "../../../../config/constants";

const firebaseAuthKey = "firebaseAuthInProgress";
const appTokenKey = "appToken";

export default class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
        splashScreen: false
    };

    this.handleGoogleLogin = this.handleGoogleLogin.bind(this);
  }

  handleGoogleLogin() {
    loginWithGoogle()
        .catch(function (error) {
            alert(error); // or show toast
            localStorage.removeItem(firebaseAuthKey);
        });
    localStorage.setItem(firebaseAuthKey, "1");
  }
  componentWillMount() {
    if (localStorage.getItem(appTokenKey)) {
        return;
    }

    firebaseAuth().onAuthStateChanged(user => {
      if (user) {
        console.log("User signed in: ", JSON.stringify(user));
        // fire.database().ref('users/' + localStorage.getItem(appTokenKey) + '').set({
        //   "full_name": user.full_name
        // })
        
        // here you could authenticate with you web server to get the
        // application specific token so that you do not have to
        // authenticate with firebase every time a user logs in
        localStorage.setItem(appTokenKey, user.uid);
      }
    });
  }
  render() {
    return (
      <div className="Account">
        {localStorage.getItem(appTokenKey) === null && <Login handleGoogleLogin={this.handleGoogleLogin} />}
        {localStorage.getItem(appTokenKey) !== null && <UserInput uberDisabled={this.props.uberDisabled} />}        
      </div>
    )
  }
}