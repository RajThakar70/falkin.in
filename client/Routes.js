import React, { Component } from 'react';
import Dashboard from './components/Dashboard';
import LoginForm from './components/LoginForm';
import Home from './components/Home'
import Contact from './components/Contact'
import Products from './components/Products'
import Devices from './components/Devices'
import { Switch, Route } from 'react-router-dom';

export default class Routes extends Component{

  constructor(props){
    super(props)
    this.state = {
      isUserLogin:false
    }
  }

  handleLogin = () => {
    this.setState({isUserLogin:true})
  }

  render() {
    // console.log(this.state.isUserLogin);
    const isUserLogin = this.state.isUserLogin;
    return(
        <Switch>
          <Route path='/login' render={()=><LoginForm isUserLogin={this.state.isUserLogin} handleLogin={this.handleLogin}/>}/>
          <Route path='/dash-board' render={()=><Dashboard isUserLogin={this.state.isUserLogin}/>}/>
          <Route path='/about-us' component={Home}/>
          <Route path='/contact' component={Contact}/>
          <Route path='/products' component={Products}/>
          <Route path='/devices' component={Devices}/>
          <Route path='/' component={Home}/>
        </Switch>
    )
  }
}
