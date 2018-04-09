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

export default class DesktopContainer extends Component {
  state = { activeItem: window.location.pathname}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { children } = this.props
    const { fixed, activeItem } = this.state

    return (
      <Responsive {...Responsive.onlyComputer}>
        <Visibility once={false} onBottomPassed={this.showFixedMenu} onBottomPassedReverse={this.hideFixedMenu}>
          <Segment inverted textAlign='center' style={{ minHeight: 300, padding: '1em 0em' }} vertical>
            <Menu
              fixed={fixed ? 'top' : null}
              inverted
              pointing={!fixed}
              secondary={!fixed}
              size='large'
            >
              <Container>
                <Menu.Item name='/' as={Link} to="/" active={activeItem === '/'} onClick={this.handleItemClick}>Home</Menu.Item>
                <Menu.Item name='/about-us' as={Link} to="/about-us" active={activeItem === '/about-us'} onClick={this.handleItemClick}>About us</Menu.Item>
                <Menu.Item name='/contact' as={Link} to='/contact' active={activeItem === '/contact'} onClick={this.handleItemClick}>Contact</Menu.Item>
                <Menu.Item name='/login' as={Link} to="/login" active={activeItem === '/login'} position='right' onClick={this.handleItemClick}>Log in</Menu.Item>
              </Container>
            </Menu>
            {window.location.pathname==='/'?<HomepageHeading />:null}
          </Segment>
        </Visibility>

        {children}
      </Responsive>
    )
  }
}
