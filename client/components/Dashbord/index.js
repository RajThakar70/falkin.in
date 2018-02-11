import React, {Component} from 'react';
import { Segment } from 'semantic-ui-react';
import CardContainer from './CardContainer';

export default class Dashbord extends Component{

  render() {
    return (
        <Segment inverted>
          <CardContainer />
        </Segment>
    )
  }
}
