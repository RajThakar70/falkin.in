import React , { Component } from 'react';
import { Menu, Segment, Sticky, Button, Grid } from 'semantic-ui-react';
import logo from 'semantic-ui-css/semantic.min.css'
import { Link } from 'react-router-dom';

export default class Appbar extends Component{

  constructor(props){
    super(props);
    this.state = {
      activeItem: 'home',
    };
  }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
  };
  handleContextRef = contextRef => this.setState({ contextRef });

  render(){
    const { contextRef, activeItem } = this.state;
    return(
      <div style={{marginBottom:50}}>
        <Menu inverted pointing secondary fixed="top" size='large' borderless style={{background:"#1b1c1d"}} >
          <Menu.Menu position='right'>
            <Link to='/home'><Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} >Home</Menu.Item></Link>
            <Link to='/login'><Menu.Item name='messages' active={activeItem === 'messages'} onClick={this.handleItemClick} >Products</Menu.Item></Link>
            <Link to='/dash-bord'><Menu.Item name='friends' active={activeItem === 'friends'} onClick={this.handleItemClick} >About us</Menu.Item></Link>
            <Link to='/login'><Menu.Item color="green" name='login' active={activeItem === 'login'} onClick={this.handleItemClick} >Log in</Menu.Item></Link>
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}
