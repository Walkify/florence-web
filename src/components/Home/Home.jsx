import React, { Component } from 'react'
import './Home.css'
import { Account, Header, Explain, Footer, Onboard } from './components'
import { fire } from "../../config/constants";


class Home extends Component {
  constructor() {
    super()
    this.state = {
      auth: false,
      uberToken: null,
      access_token: null,
    }
  }
  async componentDidMount() {
    const firebaseAuthKey = "firebaseAuthInProgress";
    if (localStorage.getItem(firebaseAuthKey) === "1" ) {
      this.setState({auth: true})
    }
    if (localStorage.getItem(firebaseAuthKey) === "1") {
      let userId = localStorage.getItem('appToken');
      let uberToken = null; 
      await fire.database().ref('/users/'+userId).once('value').then((uid) => this.setState({
        access_token: uid.val().uber.access_token ? uid.val().uber.access_token.access_token : false, auth_code: uid.val().uber.auth_code }));

      if(!this.state.access_token && this.state.auth_code) {
        const auth_code = window.location.href.split('/').slice(-1).pop() ? 
        window.location.href.split('/').slice(-1).pop().substr(6) : null
        fire.database().ref('users/' + localStorage.getItem('appToken') + '/uber').set({
          access_token: null,
          auth_code,
          redirect_uri: window.location.href.split('?code')[0]
        })
      }
    }
  }
  render() {
    const { access_token } = this.state 

    return (
      <React.Fragment>
        <Header />
        <div className="sep-1" />
        <Explain />
        {!this.state.auth && <Onboard />}
        <Account uberDisabled={!access_token} />
        <Footer />
      </React.Fragment>
    )
  }
}

export default Home
