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
import './index.css'

export default class DesktopContainer extends Component {
  state = { activeItem: window.location.pathname}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { children } = this.props
    const { fixed, activeItem } = this.state
    // const menuStyle = {
    //   fontFamily: 'Palanquin', sans-serif;
    // }

    return (
      <Responsive {...Responsive.onlyComputer}>
        <Visibility once={false} onBottomPassed={this.showFixedMenu} onBottomPassedReverse={this.hideFixedMenu}>
          <Segment inverted textAlign='center' style={{ minHeight: 50, padding: '1em 0em' }} vertical>
            <Menu
              fixed={fixed ? 'top' : null}
              inverted
              pointing={!fixed}
              secondary={!fixed}
              size='large'
            >
              <Container>
                <Menu.Item className="DesktopMenu" name='/' as={Link} to="/" color={activeItem === '/' ? "blue":"none"} active={activeItem === '/'} onClick={this.handleItemClick}>Home</Menu.Item>
                <Menu.Item className="DesktopMenu" name='/about-us' as={Link} to="/about-us" color={activeItem === '/about-us' ? "blue":"none"} active={activeItem === '/about-us'} onClick={this.handleItemClick}>About us</Menu.Item>
                <Menu.Item className="DesktopMenu" name='/contact' as={Link} to='/contact' color={activeItem === '/contact' ? "blue":"none"} active={activeItem === '/contact'} onClick={this.handleItemClick}>Contact</Menu.Item>
                <Menu.Item className="DesktopMenu" name='/products' as={Link} to='/products' color={activeItem === '/products' ? "blue":"none"} active={activeItem === '/products'} onClick={this.handleItemClick}>Products</Menu.Item>
                <Menu.Item className="DesktopMenu" name='/devices' as={Link} to="/devices"color={activeItem === '/devices' ? "blue":"none"}  active={activeItem === '/devices'} onClick={this.handleItemClick}>Devices</Menu.Item>
                <Menu.Item className="DesktopMenu" name='/login' as={Link} to="/login" color={activeItem === '/login' ? "blue":"none"} active={activeItem === '/login'} position='right' onClick={this.handleItemClick}>Log in</Menu.Item>
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
