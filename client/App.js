import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import Appbar from './components/Appbar';
import { Footer } from './components/Footer';
import Routes from './Routes';


class App extends Component {
  constructor(){
    super();
    this.state = {};
  }


  render() {
    return (
      <Container fluid style={{margin:0,padding:0}}>
        <Appbar>
          <Routes />
        </Appbar>
        <Footer/>
      </Container>
    );
  }
}

export default App;
