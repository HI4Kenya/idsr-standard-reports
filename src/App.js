import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from '@material-ui/core';
import {Link} from 'react-router-dom';
import Routes from './Routes';
//import MainPage from './components/MainPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <Button color="primary" >Testing</Button>
          <Link to="/">Touch me</Link>
        </p> */}
        <Routes/>
      </div>
    );
  }
}

export default App;
