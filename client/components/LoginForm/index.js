import React, { Component } from 'react';
import { Form, Segment, Button, Grid } from 'semantic-ui-react';

export default class LoginForm extends Component{

  render(){
    return(
      <div>
        <Segment inverted vertical padded="very">
          <Grid style={{height:500}} verticalAlign='middle' centered columns={3}>
            <Grid.Row stretched >
              <Grid.Column>
                <Form inverted>
                  <Form.Input icon="user" iconPosition="left" labelPosition="left" fluid label='User Name' placeholder='User Name' />
                  <Form.Input icon='lock' iconPosition='left' fluid label='Password' type="password" placeholder='Password' />
                  <Button type='submit' floated='right' inverted fluid color='green'>Login</Button>
                </Form>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </div>
    )
  }
}
