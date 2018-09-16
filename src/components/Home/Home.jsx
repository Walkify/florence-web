import React, { Component } from 'react'
import './Home.css'
import { Account, Header, Explain, Footer, Onboard } from './components'
import { fire } from "../../config/constants";


class Home extends Component {
  componentDidMount() {
    const firebaseAuthKey = "firebaseAuthInProgress";
    if (localStorage.getItem(firebaseAuthKey) === "1" ) {
      this.setState({auth: true})
    }
  }
  constructor() {
    super()
    const uberCode = window.location.href.split('/').slice(-1).pop() ? 
      window.location.href.split('/').slice(-1).pop().substr(6) : null
    
    if(uberCode) {
      fire.database().ref('users/' + localStorage.getItem('appToken')).set({
        uberAccess: uberCode,
      })
    }
    this.state = {
      auth: false,
      uberCode
    }
  }
  render() {
    const { uberCode } = this.state 
    return (
      <React.Fragment>
        <Header />
        <div className="sep-1" />
        <Explain />
        {!this.state.auth && <Onboard />}
        <Account uberDisabled={!uberCode} />
        <Footer />
      </React.Fragment>
    )
  }
}

export default Home
