import React, { Component } from 'react';
import axios from 'axios'

class App extends Component {
  constructor(){
    super();
    axios.get('http://localhost:3000/json').then( data => console.log(data))
    this.state = {};
  }


  render() {
    return (
      <div style={{height:1000}}>
      </div>
    );
  }
}

export default App;
