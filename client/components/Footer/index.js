import React, { Component } from 'react';
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react';
import Logo from '../../assets/images/Logo.png'
import '../../assets/css/index.css'


export const Footer = () => {
  return(
    <div className='footer'>
      <Segment inverted vertical style={{ padding: '5em 0em' }}>
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row>
              <Grid.Column width={3}>
                <Header inverted as='h4' content='About' />
                <List link inverted>
                  <List.Item as='a'>Jobs</List.Item>
                  <List.Item as='a'>About Us</List.Item>
                  <List.Item as='a'>Religious Ceremonies</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header inverted as='h4' content='Services' />
                <List link inverted>
                  <List.Item as='a'>PeopleCounter Pre-Order</List.Item>
                  <List.Item as='a'>PeopleCounter FAQ</List.Item>
                  <List.Item as='a'>How To Access Dash Board</List.Item>
                  <List.Item as='a'>Contact Us</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={7}>
                <Image
                  rounded
                  floated="left"
                  size='tiny'
                  src={Logo}
                />
                <Header as='h4' inverted>Falkin Technologies</Header>
                <p>Creating a morden world of Automation</p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    </div>
  )
}
