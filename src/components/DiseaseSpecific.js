import 'bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
// import {FormGroup,ControlLabel,FormControl} from 'react-bootstrap';
import './App.css';
import FormTest from './FormTest';
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

class DiseaseSpecific extends Component {

  render() {
    return (
      <div className="row">
        <p>Disease Specific Chart</p>
        <FormTest />
        <div className="col-12" id="disease_specific_chart">
          <Bar data={data} className="fullsize" />
        </div>
        {/* <div className="col-2" id="chart_region_selection">
          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Select Disease (s)
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="#">Measles</a>
              <a className="dropdown-item" href="#">Rubella</a>
              <a className="dropdown-item" href="#">Influenza</a>
              <a className="dropdown-item" href="#">Malaria</a>
              <a className="dropdown-item" href="#">Maternal deaths</a>
            </div>
          </div>
          <br />
        </div> */}
      </div>
    )
  }
}

export default DiseaseSpecific;

