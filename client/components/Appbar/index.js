import React , { Component } from 'react';
import { Menu } from 'semantic-ui-react';
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

  render(){
    const { activeItem } = this.state;
    return(
      <div style={{marginBottom:43}}>
        <Menu inverted pointing secondary fixed="top" size='large' borderless style={{background:"#1b1c1d"}} >
          <Menu.Menu position='right'>
            <Menu.Item as={Link} to='/home' name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
            <Menu.Item as={Link} to='/login' name='messages' active={activeItem === 'messages'} onClick={this.handleItemClick} >Products</Menu.Item>
            <Menu.Item as={Link} to='/dash-bord' name='friends' active={activeItem === 'friends'} onClick={this.handleItemClick} >About us</Menu.Item>
            <Menu.Item as={Link} to='/logina' color="green" name='login' active={activeItem === 'login'} onClick={this.handleItemClick} >Log in</Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}
