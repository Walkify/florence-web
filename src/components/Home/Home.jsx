import React, { Component } from 'react'
import './Home.css'
import { Account, Header, Explain, Footer, Onboard } from './components'
import { fire } from "../../config/constants";


class Home extends Component {
  state = {
    auth: null,
    access_token: null,
    auth_code: null

  }
  accountInfo = async () => {
    let account = await fire.database().ref('/users/'+ localStorage.getItem('appToken')).once('value').then((user) => user.val())
    let auth = localStorage.getItem('appToken')
    let access_token = account ? account.uber ? account.uber.access_token ? account.uber.access_token.access_token : false : false : false
    let auth_code = account ? account.uber ? account.uber.auth_code : false : false
    auth_code = window.location.href.split('/').slice(-1).pop() 
        ? window.location.href.split('/').slice(-1).pop().substr(6) : auth_code

    console.log(auth, access_token, auth_code)
    this.setState({ auth, access_token, auth_code })
  }
  async componentDidMount() {
    await this.accountInfo()
    let { auth, access_token, auth_code } = this.state

    if(auth && auth_code) {
      console.log
      fire.database().ref('users/' + localStorage.getItem('appToken') + '/uber').set({
        access_token: access_token || false,
        auth_code: auth_code ||  false,
        auth: auth || false,
        redirect_uri: window.location.href.split('?code')[0]
      })
    }
  }
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="sep-1" />
        <Explain />
        {!this.state.auth && <Onboard />}
        <Account uberDisabled={this.state.access_token} />
        <Footer />
      </React.Fragment>
    )
  }
}

export default Home
