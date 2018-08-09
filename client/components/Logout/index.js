import React, { Component } from 'react'
import { Redirect } from 'react-router'
import axios from 'axios'
import { Container, Button } from 'semantic-ui-react'
import '../../assets/css/index.css'

export default class Logout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      logout: false
    }
  }

  logout = () => {
    axios
      .get('/logout')
      .then(res => {
        if (res.status == 200)
          this.setState({ logout: true })
      })
  }

  render() {
    if(this.state.logout)
      return <Redirect to='/'/>
    else {
      return (
        <div className='logout'>
          <Container textAlign='center'>
            <Button color='red' size='large' onClick={this.logout}>Log out of the profile</Button>
          </Container>
        </div>
      )
    }
  }
}
