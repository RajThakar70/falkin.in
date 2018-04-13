import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'

export default class Devices extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return(
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
    )
  }
}
