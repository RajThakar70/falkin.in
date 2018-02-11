import React , { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class Appbar extends Component{

  constructor(props){
    super(props);
    this.state = {
      activeItem: window.location.pathname,
    };
  }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
  };

  render(){
    const { activeItem } = this.state;
    return(
      <div style={{marginBottom:40}}>
        <Menu inverted pointing stackable secondary fixed="top" borderless style={{background:"#1b1c1d"}} >
          <Menu.Menu position='right'>
            <Menu.Item as={Link} to='/home' name='/home' active={activeItem === '/home'} onClick={this.handleItemClick} />
            <Menu.Item as={Link} to='/products' name='/products' active={activeItem === '/products'} onClick={this.handleItemClick} />
            <Menu.Item as={Link} to='/about-us' name='/about-us' active={activeItem === '/about-us'} onClick={this.handleItemClick} />
            <Menu.Item as={Link} to='/login' name='/login' active={activeItem === '/login'} onClick={this.handleItemClick} />
        </Menu.Menu>
        </Menu>
      </div>
    )
  }
}
