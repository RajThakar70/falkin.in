import React, { Component } from 'react'
import { Form, Button, Grid, Container, Segment, Message } from 'semantic-ui-react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import '../../assets/css/index.css'

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
    axios
      .post('/login', { username: this.state.username, password: this.state.password })
      .then(res => {
        // console.log(res);
        this.props.handleLogin(this.state.username)
        if(res.status == 200) { this.props.handleLogin(this.state.username) }
        // console.log('Successfully logged in!')
      })
      .catch(err => {
        console.log(err.response);
      })
  }

  handleChange = (event) => {
    event.target.name === "username" ? (this.setState({username:event.target.value})):(this.setState({password:event.target.value}))

  }

  render(){
    console.log("in"+this.props.isUserLogin);

    return(
      <div className='login'>
        <div className="login-body">
            { this.props.isUserLogin ?
              (<Redirect from='/login' to='/devices'/>)
              :
              (
                <Grid centered>
                  <Grid.Row>
                    <Grid.Column mobile={10} tablet={8} computer={6}>
                      <Form onSubmit={(e) => this.handleSubmit(e)} inverted>
                        <Form.Input name="username" icon="user" value={this.state.username} onChange={this.handleChange} iconPosition="left" fluid label='User Name' placeholder='User Name' />
                        <Form.Input name="password" icon='lock' value={this.state.password} onChange={this.handleChange} iconPosition='left' fluid label='Password' type="password" placeholder='Password' />
                        <Button type='submit' floated='right' inverted fluid color='green'>Login</Button>
                      </Form>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              )
            }
        </div>
      </div>
    )
  }
}
