import React, { Component } from 'react'
import { Form, Button, Grid, Container, Segment, Message } from 'semantic-ui-react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

export default class LoginForm extends Component{

  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }

  handleSubmit = (e) =>{
    e.preventDefault();
    console.log(this.state);
    const data = this.state
    console.log(data);
    axios
      .post('/login', { data })
      .then(res => {
        console.log(res);
        // this.props.handleLogin(this.state);
        console.log('Successfully logged in!')
      })
      .catch(err => {
        console.log(err.response);
      })
  }

  handleChange = (event) => {
    console.log(this.props.isUserLogin)
    event.target.name === "username" ? (this.setState({username:event.target.value})):(this.setState({password:event.target.value}))

  }

  render(){
    console.log("in"+this.props.isUserLogin);

    return(
      <Segment vertical inverted>
        {this.props.isUserLogin?
          (<Redirect from='/login' to='/dash-board'/>):
          (<Grid centered>
            <Grid.Row>
              <Grid.Column mobile={10} tablet={8} computer={6}>
                <Form onSubmit={(e) => this.handleSubmit(e)} inverted>
                  <Form.Input type='hidden' name='_csrf'/>
                  <Form.Input name="username" icon="user" value={this.state.username} onChange={this.handleChange} iconPosition="left" fluid label='User Name' placeholder='User Name' />
                  <Form.Input name="password" icon='lock' value={this.state.password} onChange={this.handleChange} iconPosition='left' fluid label='Password' type="password" placeholder='Password' />
                  <Button type='submit' floated='right' inverted fluid color='green'>Login</Button>
                </Form>
              </Grid.Column>
            </Grid.Row>
          </Grid>)}
      </Segment>
    )
  }
}
