import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import ReactToExcel from 'react-html-table-to-excel';
// import $ from 'jquery';
// import Popper from 'popper.js';
import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';
import {Card,CardHeader} from 'reactstrap';
import {Button} from 'react-bootstrap';
import './App.css';
var data = {
        labels: ["33", "38", "43", "48", "53", "58", "63","68","73"],
        datasets: [{
          label: "Reported cases*",
           borderColor: 'blue',
          data: [4, 14, 12, 2, 1,5,13,1,4],
          },
          {
            label: "Expolated cases**",
             borderColor: 'green',
            data: [3, 10, 5, 2, 19,16,10,7,10],
            },
            {
                label: "Positivity rate",
                 borderColor: 'red',
                data: [2, 7, 4, 2, 13,12,9,14,18],
                }
        ]
    }

class MalariaCases extends Component {

  render() {
    return (
	<div className="row">
    <h4>Malaria Cases</h4>
        <div className="col-12">
        <Card>
            <CardHeader>
            <div className="row">
            <div className="col-8"></div>
            <div className="col-4">
            <Button bsStyle="success" bsSize="small">Export Pdf</Button>{' '}
            <Button bsStyle="success" bsSize="small">Export PNG</Button>{' '}
            </div>
            
            </div>
            </CardHeader>
        </Card>
        </div>
    	<div className="col-12" id="chart_section">
    	 <Line data={data} className="fullsize" />
        </div>
    </div>
    	)}}


export default MalariaCases;