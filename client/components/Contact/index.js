import React, { Component } from 'react'
import axios from 'axios'
import { Form, Grid, Button, Segment, Header, Message, Modal } from 'semantic-ui-react'

export default class Contact extends Component{

    constructor(props) {
      super(props)
      this.state = {
        name: '',
        email: '',
        organisation: '',
        message: '',
        everFocusedEmail: false,
        validEmail: false,
        disableSubmit: true,
        emailTouched: false,
        openModal: false
      }
    }

    handleSubmit = (e) => {
      e.preventDefault()
      this.open()
      let data = {'name': this.state.name, 'email': this.state.email, 'organisation': this.state.organisation, 'message': this.state.message}
      data.name = data.name.toUpperCase()
      data = JSON.stringify(data)
      axios.post('/api/contact', { data })
        .then(res => { console.log('Successfully contacted! : ') })
      this.setState({
        name: '',
        email: '',
        organisation: '',
        message: ''
      })
    }

    handleChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value
      })
    }

    handleEmailChange = (event) => {
      this.setState({ email: event.target.value })
      this.state.email.match(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/) ? this.setState({ validEmail: true }) : this.setState({ validEmail: false })
      this.disableSubmit()
    }

    handleBlur = (field) => (evt) => {
      this.setState({ emailTouched: true })
    }

    disableSubmit = () => {
      // console.log('validateForm: ', this.validateForm());
      this.validateForm() ? this.setState({ disableSubmit: false }) : this.setState({ disableSubmit: true })
      // console.log(this.state.name.length);
      // console.log(this.state.email.length);
      // console.log(this.state.organisation.length);
      // console.log(this.state.organisation.length);
      // console.log(this.state.validEmail);
      // return !(this.state.name.length > 0 && this.state.email.length > 0 && this.state.organisation.length > 0 && this.state.message.length > 0)
    }

    validateForm = () => {
      return this.state.name.length > 0 && this.state.email.length > 0 && this.state.organisation.length > 0 && this.state.message.length > 0 && (this.state.validEmail)
    }

    open = () => this.setState({ openModal: true })
    close = () => this.setState({ openModal: false })

    renderForm = () => {
      const markError = () => {
        // this.state.emailTouched ? ( this.state.validEmail ? false : true ) : false
        if(this.state.emailTouched) {
          if(this.state.validEmail)
            return false
          else
            return true
        }
        else
          return false
      }
      return (
        <Segment>
          <Grid centered>
            <Grid.Row>
              <Grid.Column mobile={10} tablet={8} computer={6}>
                <Header as='h4' content='Please fill the below form for further contact' icon='pencil alternate' iconPosition='left' fluid/>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column mobile={10} tablet={8} computer={6}>
                <Form onSubmit={(e) => this.handleSubmit(e)} success>
                  <Form.Input required name='name' icon='user' value={this.state.name} onChange={e => this.handleChange(e)} iconPosition='left' fluid label='Name' placeholder='Please enter your name' />
                  <Form.Input required name='email' icon='at' className={markError() ? 'error': 'success'} onBlur={this.handleBlur('email')} value={this.state.email} onChange={e => this.handleEmailChange(e)} iconPosition='left' fluid label='E-mail' placeholder='Please enter your email address' />
                  <Form.Input required name='organisation' icon='building' value={this.state.organisation} onChange={e => this.handleChange(e)} iconPosition='left' fluid label='Organisation' placeholder='Please enter the name of your organisation' />
                  <Form.Input required name='message' icon='comment' value={this.state.message} onChange={e => this.handleChange(e)} iconPosition='left' fluid label='message' placeholder='Please state the reason...' />
                  <Button disabled={this.state.disableSubmit} type='submit' floated='right' inverted fluid color='green'>Send</Button>
                </Form>
                <Modal open={this.state.openModal} onClose={this.close}>
                  <Modal.Content>
                    <p>Your contact request has been received by us. We'll get back to you soon.</p>
                  </Modal.Content>
                </Modal>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      )
    }

    render() {
      return this.renderForm()
    }
}
