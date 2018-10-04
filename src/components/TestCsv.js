import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
//import {CSVLink} from 'react-csv';
import {CSVLink} from 'react-csv';
//import Button from 'reactstrap';
import './App.css';
const csvData =[
    ['firstname', 'lastname', 'email'] ,
    ['Ahmed', 'Tomi' , 'ah@smthing.co.com'] ,
    ['Raed', 'Labes' , 'rl@smthing.co.com'] ,
    ['Yezzi','Min l3b', 'ymin@cocococo.com']
  ];
class TestCsv extends Component {
  render() {
    return (
      <div className="row">
      <CSVLink data={csvData} >Download Report</CSVLink>    
      </div>
    )
  }
}

export default TestCsv;

