import React, { Component } from 'react';
import Dashbord from './components/Dashbord';
import LoginForm from './components/LoginForm';
import Home from './components/Home'
import { Switch, Route } from 'react-router-dom';

export default class Routes extends Component{

  render(){
    return(
        <Switch>
          <Route path='/login' component={LoginForm}/>
          <Route path='/dash-bord' component={Dashbord}/>
          <Route path='/about-us' component={Home}/>
          <Route path='/' component={Home}/>
        </Switch>
    )
  }
}
