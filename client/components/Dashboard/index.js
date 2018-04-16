import React, {Component} from 'react';
import { Segment } from 'semantic-ui-react';
import CardContainer from './CardContainer';

export default class Dashboard extends Component{

  constructor(props) {
    super(props)
    console.log(props);
  }

  render() {
    console.log("in"+this.props.isUserLogin);
    return (
        <Segment inverted vertical>
          <CardContainer />
        </Segment>
    )
  }
}
