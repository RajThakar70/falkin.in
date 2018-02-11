import React, { Component } from 'react';
import { Form, Button, Grid, Container, Segment } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';
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
    this.props.handleLogin(this.state);
  }

  handelChange = (event) => {
    console.log(this.props.isUserLogin)
    event.target.id === "username" ? (this.setState({username:event.target.value})):(this.setState({password:event.target.value}))

  }

  render(){
    console.log("in"+this.props.isUserLogin);

    return(
      <Segment vertical inverted>
        {this.props.isUserLogin?
          (<Redirect from='/login' to='/dash-bord'/>):
          (<Grid centered>
            <Grid.Row>
              <Grid.Column mobile={10} tablet={8} computer={6}>
                <Form inverted>
                  <Form.Input id="username" icon="user" value={this.state.username} onChange={this.handelChange} iconPosition="left" fluid label='User Name' placeholder='User Name' />
                  <Form.Input id="password" icon='lock' value={this.state.password} onChange={this.handelChange} iconPosition='left' fluid label='Password' type="password" placeholder='Password' />
                  <Button type='submit' onClick={(e)=>this.handelSubmit(e)} floated='right' inverted fluid color='green'>Login</Button>
                </Form>
              </Grid.Column>
            </Grid.Row>
          </Grid>)}
      </Segment>
    )
  }
}
