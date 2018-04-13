import React, { Component } from 'react'
import { Card, Container, Divider, Grid, Row, Segment } from 'semantic-ui-react'

export default class Devices extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return(
      <Container>
        <Card.Group>
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
          />
          <Card
            href='#card-example-link-card'
            header='Elliot Baker'
            meta='Friend'
            description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
          />
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
