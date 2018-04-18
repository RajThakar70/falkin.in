import React, { Component } from 'react'
import { Card, Container, Divider, Grid, Row, Segment } from 'semantic-ui-react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Dashboard from '../Dashboard'

export default class Devices extends Component {
  // axios.get('/api/devices', {
  //   params: {
  //     username: this.props.username
  //   }
  // })
  // .then(function (response) {
  //   console.log(response);
  // })
  // .catch(function (error) {
  //   console.log(error);
  // });
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
        console.log('status is: ', res.status)
        console.log(res.data.data);
        this.setState({
          username: res.data.data.username,
          devices: res.data.data.devices
        })
        // console.log('state', this.state);
      })
      .catch(err => { console.error(err) })
  }

  render() {
    var username = this.state.username
    // console.log(username);
    return(
      <Container>
        <Card.Group>
          {
            this.state.devices.map(function(device, index) {
              // console.log('username in devices: ', username,'. Device is: ', device);
              return (
                <Card
                  key={index}
                  description={device} to='/dash-board'
                  onClick={()=>{ <Dashboard username={username} device={device}/> }}
                />
              )
            })
          }
          {/* <Card
            href='#'
            description={this.de}
          />
          <Card
            href='#card-example-link-card'
            header='Elliot Baker'
            meta='Friend'
            description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
          />
          <Card
            href='#card-example-link-card'
            header='Elliot Baker'
            meta='Friend'
            description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
          /> */}
        </Card.Group>
      </Container>
      // {/* <Container>
      //   <Grid columns={3} relaxed>
      //     <Grid.Column>
      //       <Segment basic href='#card-example-link-card'>
      //         Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
      //       </Segment>
      //     </Grid.Column>
      //     <Divider vertical>Or</Divider>
      //     <Grid.Column>
      //       <Segment basic href='#card-example-link-card'>
      //         Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
      //       </Segment>
      //     </Grid.Column>
      //     <Divider vertical>And</Divider>
      //     <Grid.Column>
      //       <Segment basic href='#card-example-link-card'>
      //         Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
      //       </Segment>
      //     </Grid.Column>
      //   </Grid>
      // </Container> */}
    )
  }
}
