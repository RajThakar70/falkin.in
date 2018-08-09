import React, { Component } from 'react'
import { Button, Card, Container, Dimmer, Divider, Grid, Loader, Row, Segment } from 'semantic-ui-react'
import axios from 'axios'
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom'
import Dashboard from '../Dashboard'
import Logout from '../Logout'
import '../../assets/css/index.css'

export default class Devices extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: this.props.username,
      devices: [],
      loader: true,
      redirect: false,
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

  componentDidMount() {
    axios
      .get('/api/devices', {
        params: {
          username: this.state.username
        }
      })
      .then(res => {
        if(res.data.status === 401) {
          this.setState({ redirect: true })
        } else if(res.data.err) {
          this.setState({ loader: false });
        } else if(res.data.data) {

          this.setState({
            username: res.data.data.username,
            devices: res.data.data.devices,
            loader: false
          })
        }
      })
  }

  render() {
    if (this.state.logout)
      return <Redirect to='/' />
    else {
      if (this.state.redirect)
        return <Redirect to='/login' />
      else {
        var username = this.state.username
        var loader = this.state.loader
        var totalDevices = Object.keys(this.state.devices).length
        return (
          <div className='devices'>
            <div className='devices-body'>
              <Dimmer active={loader}>
                <Loader>Loading</Loader>
              </Dimmer>
              <div className='push-devices-down'></div>
              <Container textAlign='center'>
                <Card.Group>
                  {
                    this.state.devices.map((device, index) => {
                      return (
                        <Link key={index} to={{ pathname: '/dash-board', state: { username: username, device: device } }}>
                          <Card description={device} meta={username} />
                        </Link>
                      )
                    })
                  }
                </Card.Group>
              </Container>
              <div className='logout'>
                <Container textAlign='center'>
                  <Button color='red' size='large' onClick={this.logout}>Log out of the profile</Button>
                </Container>
              </div>
            </div>
          </div>
        )
      }
    }
  }
}
