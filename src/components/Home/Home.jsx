import React, { Component } from 'react'
import './Home.css'
import { Account, Header, Explain, Footer, Onboard } from './components'
import { fire } from "../../config/constants";


class Home extends Component {
  constructor() {
    super()
    const auth_code = window.location.href.split('/').slice(-1).pop() ? 
      window.location.href.split('/').slice(-1).pop().substr(6) : null
    
    if(auth_code) {
      fire.database().ref('users/' + localStorage.getItem('appToken') + '/uber').set({
        access_token: null,
        auth_code,
        redirect_uri: window.location.href.split('?code')[0]
      })
    }
    this.state = {
      auth: false,
      auth_code,
      uberToken: null
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
      fire.database().ref('/users/'+userId).once('value').then((uid) => this.setState({
        uberToken: uid.node_.children_.root_.value.value_ || false})); //access_token
      
    }
  }
  render() {
    const { auth_code, uberToken } = this.state 

    return (
      <React.Fragment>
        <Header />
        <div className="sep-1" />
        <Explain />
        {!this.state.auth && <Onboard />}
        <Account uberDisabled={!uberToken} />
        <Footer />
      </React.Fragment>
    )
  }
}

export default Home
