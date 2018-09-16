import React, { Component } from 'react'
import './Home.css'
import { Account, Header, Explain, Footer, Onboard } from './components'


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

    this.state = {
      auth: false,
      uberCode
    }
    debugger
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
