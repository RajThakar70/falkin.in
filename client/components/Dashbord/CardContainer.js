import React, { Component } from 'react';
import { Grid, Sidebar, Segment, Button, Image, Icon, Header } from 'semantic-ui-react'

export default class CardContainer extends Component{
  render(){
    return(
      <div>
        <Grid style={{height:500}} verticalAlign='top' centered columns={4}>
          <Grid.Row stretched>
            <Grid.Column width={14}>
              <Segment style={{background:'linear-gradient(135deg, #f65599 0%,#4d0316 100%)',borderColor:'#ce9ffc'}}>
                <Icon inverted circular name='sidebar' onClick={()=>this.props.toggle()} />
                <Header as='h1' inverted>Analysis</Header>
                <Image src='/assets/images/wireframe/paragraph.png' />
              </Segment>
              </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}
