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
import PeopleCounter from '../../assets/images/PeopleCounter.png'


export default class Home extends Component{
  render(){
    return(
    <HomepageLayout />
    )
  }
}

const HomepageLayout = () => (
  <div>
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row textAlign='center'>
          <Grid.Column width={8}>
            <Header as='h3' style={{ fontSize: '2em' }}>Falkin Technologies launching one of it’s products: </Header>
            <Header as='h1' style={{ fontSize: '2em' }}>The people counter</Header>
          </Grid.Column>
          <Grid.Column floated='right' width={6}>
            <Image
              bordered
              rounded
              size='large'
              src={PeopleCounter}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment style={{ padding: '0em' }} vertical>
      <Grid celled='internally' columns='equal' stackable>
        <Grid.Row>
          <Grid.Column textAlign='left' style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>"The people counter"</Header>
            <p style={{ fontSize: '1.33em' }}>
              - Footfalls in your showroom <br />
              - The time analysis of when the footfalls happened<br />
              - Daily mailed report of complete analysis of the days football<br />
              - Website to keep track of all analysis to keep track of your performance.<br />
            </p>
          </Grid.Column>
          <Grid.Column textAlign='center' style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>"I want my country to be a superpower and make science the axis upon which
            India runs."</Header>
            <p style={{ fontSize: '1.33em' }}>
              <Icon circular size='large' color='grey' name='user circle' />
              <b>{' '}Moxad Thaker</b> Founder
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Container text>
        <Header as='h3' style={{ fontSize: '2em' }}>The people counter, More...</Header>
        <p style={{ fontSize: '1.33em' }}>
          In today’s time with the entire world shifting towards the smart era, it has become of
          utmost importance to understand how your brand is performing with its audience. With
          the online front presented to the general public through websites, it is being closely
          watching by Search Engine Optimization and it is very important to track the number of
          people visiting your brand. Hence our product cover the other equally important
          segment of watching your customers, which are offline.
        </p>
        <Divider
          as='h4'
          className='header'
          horizontal
          style={{ margin: '3em 0em', textTransform: 'uppercase' }}
        >
          <div>Case Study</div>
        </Divider>
        <Header as='h3' style={{ fontSize: '2em' }}>Why you need "People Counter"?</Header>
        <p style={{ fontSize: '1.33em' }}>
          At the offline level, the customers who have made it to your respected
          showroom/shop/business are there to really consider to make purchases of your
          particular brand. Hence keeping a track of your customers who are going to be potential
          direct clients becomes necessary.
        </p>
        <Button as='a' size='large'>I'm Still Quite Interested</Button>
      </Container>
    </Segment>

  </div>
)
