import React, { Component } from 'react';
import Graph from './Graphs/';
import { Grid, Segment, Image, Icon, Header, Dimmer, Loader } from 'semantic-ui-react';

export default class CardContainer extends Component{

  render(){
    return(
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <Segment inverted>
                <Graph/>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
    )
  }
}
