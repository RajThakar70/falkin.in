import React, {Component} from 'react';
import { Sidebar, Menu, Icon, Container } from 'semantic-ui-react';
import CardContainer from './CardContainer';

export default class Dashbord extends Component{
  state = { visible: false }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  render() {
    const { visible } = this.state
    return (
        <Container fluid style={{background:'#ce9ffc'}}>
          <Sidebar.Pushable>
            <Sidebar as={Menu} animation='scale down' width='thin' visible={visible} icon='labeled' vertical inverted>
              <Menu.Item name='home'>
                <Icon name='home' />
                Home
              </Menu.Item>
              <Menu.Item name='gamepad'>
                <Icon name='gamepad' />
                Games
              </Menu.Item>
              <Menu.Item name='camera'>
                <Icon name='camera' />
                Channels
              </Menu.Item>
            </Sidebar>
            <Sidebar.Pusher>
              <CardContainer toggle={this.toggleVisibility}/>
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </Container>
    )
  }
}
