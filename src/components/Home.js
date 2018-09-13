import React, { Component } from 'react';
// import logo from './logo.svg';
// import {Button} from '@material-ui/core';
// import {Link} from 'react-router-dom';
import TopBar from './TopBar';

class Home extends Component {
  render() {
    return (
          <div className="row">
          <div className="col-12">
          <TopBar/>
          </div>
          </div>
    );
  }
}

export default Home;
