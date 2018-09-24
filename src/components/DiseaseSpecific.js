import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import {Form,FormGroup} from 'reactstrap';
import './App.css';
import Specific from './Specific';
//import MalariaCases from './MalariaCases';
//import FluenzaSpecimen from './FluenzaSpecimen';
//import MaternalDeaths from './MaternalDeaths';

class DiseaseSpecific extends Component {
  handleChange(event){

  }
  render() {
    return (
      <div className="row">
      <Form>
        <FormGroup>
          <select className="form-control" onChange={this.handleChange}>
            <option value="">~~Select Disease~~</option>
            <option value="1">Measles&Rubella</option>
            <option value="2">Fluenza</option>
            <option value="3">Malaria</option>
            <option value="4">Maternal Deaths</option>
          </select>
        </FormGroup>
      </Form>
        <Specific/>
        {/* <MalariaCases/>
        <FluenzaSpecimen/>
        <MaternalDeaths/> */}
      </div>
    )
  }
}

export default DiseaseSpecific;

