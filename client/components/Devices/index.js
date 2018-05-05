import React, { Component } from 'react'
import { Card, Container, Dimmer, Divider, Grid, Loader, Row, Segment } from 'semantic-ui-react'
import axios from 'axios'
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom'
import Dashboard from '../Dashboard'
import '../../assets/css/index.css'

export default class Devices extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: this.props.username,
      devices: [],
      loader: true
    }
  }

  componentDidMount() {
    axios
      .get('/api/devices', {
        params: {
          username: this.state.username
        }
      })
      .then(res => {
        if (res.status != 401) {
          if(res.err)
            console.log('Error while retrieving: ', res.err)
          else {
            this.setState({
              username: res.data.data.username,
              devices: res.data.data.devices,
              loader: false
            })
          }
        } else {
          console.log('Unauthorized!');
        }
      })
  }

  render() {
    var username = this.state.username
    var loader = this.state.loader
    return(
      <div className='devices'>
        <div className='devices-body'>
          <Dimmer active={loader}>
            <Loader>Loading</Loader>
          </Dimmer>
          <div className='push-devices-down'></div>
          <Container>
            <Card.Group>
              {
                this.state.devices.map((device, index) => {
                  return (
                    <Link
                      key={index}
                      to={{
                        pathname: '/dash-board',
                        state: { username: username, device: device }
                      }}
                    >
                      <Card
                        description={device}
                        meta={username}
                      />
                    </Link>
                  )
                })
              }
            </Card.Group>
          </Container>
          {/* <div className='push-devices-footer-down'></div> */}
        </div>
      </div>
    )
  }
}
