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
import { Link } from 'react-router-dom';
import { HomepageHeading } from './HomepageHeading';


export default class MobileContainer extends Component {
  state = { activeItem: window.location.pathname }

  handleToggle = () => this.setState({ sidebarOpened: !this.state.sidebarOpened })
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { children } = this.props
    const { sidebarOpened, activeItem } = this.state
    return (
      <Responsive {...Responsive.onlyMobile}>
        <Sidebar.Pushable>
          <Sidebar as={Menu} onClick={this.handleToggle} animation='uncover' inverted vertical visible={sidebarOpened}>
            <Menu.Item as={Link} to="/" active={activeItem === '/'} onClick={this.handleItemClick}>Home</Menu.Item>
            <Menu.Item as={Link} to="/about-us" active={activeItem === '/about-us'} onClick={this.handleItemClick}>About us</Menu.Item>
            <Menu.Item as={Link} to="/contact" active={activeItem === '/contact'} onClick={this.handleItemClick}>contact</Menu.Item>
            <Menu.Item as={Link} to="/products" active={activeItem === '/products'} onClick={this.handleItemClick}>products</Menu.Item>
            <Menu.Item as={Link} to="/login" active={activeItem === '/login'} position='right' onClick={this.handleItemClick}>Log in</Menu.Item>
          </Sidebar>

          <Sidebar.Pusher dimmed={sidebarOpened} style={{ minHeight: '100vh' }}>
            <Segment inverted textAlign='center' style={{ minHeight: 150, padding: '1em 0em' }} vertical>
              <Container>
                <Menu inverted pointing secondary size='large'>
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name='sidebar' />
                  </Menu.Item>
                  <Menu.Item as={Link} to="/login" position='right'>Log in</Menu.Item>
                </Menu>
              </Container>
              {window.location.pathname==='/'?<HomepageHeading mobile/>:null}
            </Segment>

            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Responsive>
    )
  }
}
