// Node Modules
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// Components
import LayoutBody from './shared/layout/layout-body';
import LayoutContainer from './shared/layout/layout-container';
import WelcomeContainer from './start/welcome';


class App extends Component {
  render() {
    return (
      <LayoutBody className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Spelling Champ</h2>
        </div>
        <LayoutContainer>
          <WelcomeContainer />
        </LayoutContainer>
      </LayoutBody>
    );
  }
}


export default App;
