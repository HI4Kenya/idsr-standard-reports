import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import {Form,FormGroup} from 'reactstrap';
import './App.css';
import Specific from './Specific';
import MalariaCases from './MalariaCases';
import FluenzaSpecimen from './FluenzaSpecimen';
import MaternalDeaths from './MaternalDeaths';

class DiseaseSpecific extends Component {
  constructor(props){
    super(props);
    this.state={choice:""}

  }
    //constructor with state to hold current choice
    //this.state = { choice:"0" }

  handleChange(event){
    var selected=event.target.value
    //change the state of selection
    this.setState({choice:selected})
  }
  render() {
    //select which one to render depending on this.state.choice
    let chart=this.state.choice;
    switch (chart) {
        case "1":
        chart=<Specific/>
        break;
        case "2":
        chart=<FluenzaSpecimen/>  
        break;
        case "3":
        chart=<MalariaCases/>
        break;
        case "4":
        chart=<MaternalDeaths/>
        break;
    
      default:
        break;
    }
    return (
      <div>
        <div className="row">
      <Form>
        <FormGroup>
          <select className="form-control" onChange={this.handleChange.bind(this)}>
            <option value="">~~Select Disease~~</option>
            <option value="1">Measles&Rubella</option>
            <option value="2">Fluenza</option>
            <option value="3">Malaria</option>
            <option value="4">Maternal Deaths</option>
          </select>
        </FormGroup>
      </Form>
      {/* rendering area depending on choice */}
       {chart}
      </div>
      </div>
    )
  }
}

export default DiseaseSpecific;

