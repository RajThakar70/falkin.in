import React, { Component } from 'react';
import App from './App';
import Dashbord from './components/Dashbord';
import LoginForm from './components/LoginForm';
import Appbar from './components/Appbar'

import { Switch, Route, IndexRoute } from 'react-router-dom';

export default class Routes extends Component{
  render(){
    return(
      <div>
        <Appbar />
        <Switch>
          <Route path='/login' component={LoginForm}/>
          <Route path='/dash-bord' component={Dashbord}/>
          <Route path='/' component={App}/>
        </Switch>
      </div>
    )
  }
}
