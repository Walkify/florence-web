import React, { Component } from 'react'
import './Home.css'
import { Account, Header, Explain, Footer, Onboard } from './components'


export default class Home extends Component {
  componentDidMount() {
    const firebaseAuthKey = "firebaseAuthInProgress";
    if (localStorage.getItem(firebaseAuthKey) === "1" ) {
      this.setState({auth: true})
    }
  }
  constructor() {
    super()
    this.state = {
      auth: false,
    }
  }
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="sep-1" />
        <Explain />
        {!this.state.auth && <Onboard />}
        <Account />
        <Footer />
      </React.Fragment>
    )
  }
}
