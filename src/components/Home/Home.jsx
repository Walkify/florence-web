import React, { Component } from 'react'
import './Home.css'
import { Header, Explain, Footer, Onboard } from './components'

export default class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="sep-1" />
        <Explain />
        <Onboard />
        <Footer />
      </React.Fragment>
    )
  }
}
