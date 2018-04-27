import React, { Component } from 'react'
import { Card, Container, Divider, Grid, Row, Segment } from 'semantic-ui-react'
import axios from 'axios'
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom'
import Dashboard from '../Dashboard'

export default class Devices extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: this.props.username,
      devices: []
    }
    axios
      .get('/api/devices', {
        params: {
          username: this.state.username
        }
      })
      .then(res => {
        this.setState({
          username: res.data.data.username,
          devices: res.data.data.devices
        })
      })
      .catch(err => { console.error(err) })
  }

  render() {
    var username = this.state.username
    return(
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
    )
  }
}
