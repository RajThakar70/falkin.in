import React , { Component } from 'react';
import { Menu, Segment, Sticky, Button, Grid } from 'semantic-ui-react';
import logo from 'semantic-ui-css/semantic.min.css'

export default class Appbar extends Component{

  constructor(props){
    super(props);
    this.state = {
      activeItem: 'home',
    };
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  handleContextRef = contextRef => this.setState({ contextRef });

  render(){
    const { contextRef, activeItem } = this.state;
    return(
      <div>
        <Segment inverted vertical>
          <Menu inverted pointing secondary fixed="top">
            <Menu.Menu position='right'>
              <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
              <Menu.Item name='messages' active={activeItem === 'messages'} onClick={this.handleItemClick} />
              <Menu.Item name='friends' active={activeItem === 'friends'} onClick={this.handleItemClick} />
              <Menu.Item>
                <Button basic inverted color='green'>Log in</Button>
              </Menu.Item>
            </Menu.Menu>
          </Menu>
        </Segment>
      </div>
    )
  }
}
