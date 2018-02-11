import React, { Component } from 'react';
import Dashbord from './components/Dashbord';
import LoginForm from './components/LoginForm';
import Home from './components/Home'
import { Switch, Route } from 'react-router-dom';

export default class Routes extends Component{

  constructor(props){
    super(props)
    this.state = {
      isUserLogin:false
    }
  }



  handleLogin = (state) => {
    if(state.username==='admin'&&state.password=='admin'){
      this.setState({isUserLogin:true})
    }
    return 'err';
  }
  render(){
    console.log(this.state.isUserLogin);
    const isUserLogin = this.state.isUserLogin;
    return(
        <Switch>
          <Route path='/login' render={()=><LoginForm isUserLogin={this.state.isUserLogin} handleLogin={this.handleLogin}/>}/>
          <Route path='/dash-bord' component={Dashbord}/>
          <Route path='/about-us' component={Home}/>
          <Route path='/' component={Home}/>
        </Switch>
    )
  }
}
