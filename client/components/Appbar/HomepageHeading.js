
import React , { Component } from 'react';
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

const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Image
      centered
      fluid
      src={Logo}
    />
    <Header
      as='h1'
      content='Falkin Technologies'
      inverted
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '0.5em' : '1.5em',
      }}
    />
    <Header
      as='h2'
      content='Falkin is an upcoming startup based on advance technology development. It branches
      into various divisions of technology such as video processing, interactive hard-ware,
      real-time data collection, algorithms, data analysis, web services, internet of things and
      automation.'
      inverted
      style={{
        fontSize: mobile ? '.7em' : '.9em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
      }}
    />
  </Container>
)

export { HomepageHeading }
