import React, { Component } from 'react';
import { Form, Button, Grid, Container, Segment } from 'semantic-ui-react';

export default class LoginForm extends Component{

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  handelSubmit = (e) =>{
    e.preventDefault();
    alert(this.state.username+" "+this.state.password)
  }

  handelChange = (event) => {
    console.log(event.target)
    event.target.id === "username" ? (this.setState({username:event.target.value})):(this.setState({password:event.target.value}))

  }

  render(){
    return(
      <Segment vertical inverted>
        <Grid centered>
          <Grid.Row>
            <Grid.Column mobile={10} tablet={8} computer={6}>
              <Form inverted>
                <Form.Input id="username" icon="user" value={this.state.username} onChange={this.handelChange} iconPosition="left" fluid label='User Name' placeholder='User Name' />
                <Form.Input id="password" icon='lock' value={this.state.password} onChange={this.handelChange} iconPosition='left' fluid label='Password' type="password" placeholder='Password' />
                <Button type='submit' onClick={(e)=>this.handelSubmit(e)} floated='right' inverted fluid color='green'>Login</Button>
              </Form>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    )
  }
}
