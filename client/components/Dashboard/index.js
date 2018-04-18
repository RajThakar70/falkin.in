import React, {Component} from 'react';
import { Segment } from 'semantic-ui-react';
import CardContainer from './CardContainer';

export default class Dashboard extends Component{

  constructor(props) {
    super(props)
    console.log(this.props.username);
    console.log(this.props.device);
  }

  render() {
    return (
        <Segment inverted vertical>
          <CardContainer />
        </Segment>
    )
  }
}
