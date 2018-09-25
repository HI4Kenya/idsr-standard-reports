import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import {Card,CardHeader} from 'reactstrap';
import {Button} from 'react-bootstrap';
import './App.css';
var data = {
  labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"],
  datasets: [{
    label: "Measles",
    legend: {
      display: true,
      position: 'right'
    },
    backgroundColor: '#FF00FF',
    // borderColor: 'rgb(255, 99, 132)',
    data: [4, 14, 12, 2, 1],
  },
  {
    label: "Rubella",
    backgroundColor: '#6495ED',
    data: [3, 10, 5, 2, 20],
  }]
}

class Specific extends Component {

  render() {
    return (
      <div className="row">
        <h4>Malaria & Rubella</h4>
        <div className="col-12">
        <Card>
            <CardHeader>
            <div className="row">
            <div className="col-8"></div>
            <div className="col-4">
            <Button bsStyle="success" bsSize="small">Export Pdf</Button>{' '}
            <Button bsStyle="success" bsSize="small">PNG</Button>{' '}
            </div>    
            </div>
            </CardHeader>
        </Card>
        </div>
        <div className="col-12" id="disease_specific_chart">
          <Bar data={data} className="fullsize" />
        </div>
      </div>
    )
  }
}

export default Specific;

