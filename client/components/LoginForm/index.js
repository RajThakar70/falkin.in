import React, { Component } from 'react';
import { Form, Segment, Button, Grid, Transition } from 'semantic-ui-react';

export default class LoginForm extends Component{

  state={
    visible:false
  }

  componentDidMount(){
    this.setState({visible:true})
  }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  render(){
    return(
      <div>
        <Segment style={{background:"linear-gradient(135deg, #615180 0%,#5e2563 100%)"}} vertical>
          <Grid style={{height:500}} verticalAlign='middle' centered columns={3}>
            <Grid.Row stretched>
              <Grid.Column>
                <Transition animation={"fade"} duration={1000} visible={this.state.visible}>
                  <Form inverted>
                    <Form.Input icon="user" iconPosition="left" fluid label='User Name' placeholder='User Name' />
                    <Form.Input icon='lock' iconPosition='left' fluid label='Password' type="password" placeholder='Password' />
                    <Button onClick={()=>this.toggleVisibility()} floated='right' inverted fluid color='green'>Login</Button>
                  </Form>
                </Transition>
                </Grid.Column>
              </Grid.Row>
            </Grid>
        </Segment>
      </div>
    )
  }
}
