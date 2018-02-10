import React, {Component} from 'react';
import { Sidebar, Menu, Icon, Container } from 'semantic-ui-react';
import CardContainer from './CardContainer';

export default class Dashbord extends Component{
  state = { visible: true }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  render() {
    const { visible } = this.state
    return (
      <div className="ui segment">
        <CardContainer toggle={this.toggleVisibility}/>
      </div>
    )
  }
}
