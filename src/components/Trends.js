import 'bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap/dist/js/bootstrap.bundle.min';
// import $ from 'jquery';
// import Popper from 'popper.js';
import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Button, Form, FormGroup } from 'reactstrap';
import { Line } from 'react-chartjs-2';
import './App.css';

var data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [{
    label: "Measles",
    borderColor: 'rgb(255, 99, 132)',
    data: [4, 14, 12, 2, 1, 5, 13],
  },
  {
    label: "Rubella",
    borderColor: '#0000FF',
    data: [3, 10, 5, 2, 20, 16, 10],
  }]
}

class Trends extends Component {

  render() {
    return (
      <div className="row">
        <div className="col-10" id="chart_section">
            <Form>
          <FormGroup>
              <Row>
                  <Col md={5}>
                  <select class="selectpicker form-control input-place"  name="select_option" id="disease" onChange="setCode(this)" required>
                  {/* multiple data-live-search="true" */}
                  <option value="">Select Region</option>
                  <option value="44">Central</option>
                  <option value="55">Coast</option>
                  <option value="33">Eastern</option>
                  <option value="22">Nairobi</option>
                  <option value="11">N/Eastern</option>
                  <option value="32">Nyanza</option>
                  <option value="34">Western</option>
                  </select>
                  </Col>
                  <Col md={5}>
                  <select class="form-control" id="county">
                  <option>Select County</option>
                  </select>
                  </Col>
                  <Col md={2}>
                  <Button>Generate Chart</Button>
                  </Col>
                  
              </Row>
              
          </FormGroup>
          
      </Form>
          <Line data={data} className="fullsize" />
        </div>
      </div>
    )
  }
}

export default Trends;