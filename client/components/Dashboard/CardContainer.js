import React, { Component } from 'react';
import Graph from './Graphs/';
import { Grid, Container } from 'semantic-ui-react';

export default class CardContainer extends Component{

  render(){
    return(
      <Container fluid>
        <Grid centered relaxed divided='vertically'>
          <Grid.Row>
            <Grid.Column mobile={16} tablet={12} computer={6} >
              <Graph graph="Piechart"/>
            </Grid.Column>
            <Grid.Column mobile={16} tablet={12} computer={8} >
              <Graph graph="Barchart"/>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column mobile={16} tablet={12} computer={14} >
              <Graph graph="Linechart"/>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column mobile={16} tablet={12} computer={14} >
              <Graph graph="Areachart"/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    )
  }
}
