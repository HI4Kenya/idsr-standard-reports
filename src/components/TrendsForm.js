import React, { Component } from 'react';
import {Row, Col } from 'react-bootstrap';
import {Form, FormGroup,Button } from 'reactstrap';
import './App.css';
import Select from "react-select";

//json data
const data = require('../components/select.json');
console.log(data);
//region names
let regionNames = data.map(region => {
 return {value:region.regionName.toLowerCase(),
         label: region.regionName};
});



class TrendsForm extends Component {
   constructor(props){
       super(props);
       this.state = {
           countyNames: [],
           selectedRegion: "",
           selectedCounty: "",
       };
       this.handleRegionChange = this.handleRegionChange.bind(this);
       this.handleCountyChange = this.handleCountyChange.bind(this);
   }

//handle region select change
   handleRegionChange = (selectedRegion) => {

       this.setState({
         selectedRegion
       });

       console.log(`Region Selected:`  + selectedRegion.label)

       //get counties
       for(var i=0; i<regionNames.length; i++){
         if(selectedRegion.label === regionNames[i].label){
           console.log(selectedRegion.label, " ", regionNames[i].label)
           let countyNames = data[i].counties.map(item =>{

             return {value: item.id,
                     label: item.displayName}
           })
           console.log(countyNames)

           this.setState({
             countyNames: countyNames
           })

           // console.log(this.state.countyNames)
         }}
     }

 //handle county change
     handleCountyChange= (selectedCounty) => {
       this.setState({
         selectedCounty
       });

       console.log(`County Selected:`  + selectedCounty.label)
     }

render() {
 // console.log("Region List: " + this.state.regionList)
 // console.log(`Region Selected:`  + this.state.selectedRegion)

 const { countyNames } = this.state;
 // console.log(countyNames)

  return (
    <div className="row">
      <div className="col-10" id="chart_section">
          <Form>
        <FormGroup>
            <Row>
                <Col md={5}>
                   {/* //select regions */}
                   <Select
                     name="select regions"
                     value={this.state.selectedRegion}
                     options={regionNames}
                     onChange={this.handleRegionChange.bind(this)}
                     placeholder="Select Region"
                                           />
                </Col>

                <Col md={5}>
                 {/* //select counties */}
                   <Select
                     name="select counties"
                     value={this.state.selectedCounty}
                     options={countyNames}
                     onChange={this.handleCountyChange.bind(this)}
                     placeholder="Select Counties"
                     isMulti
                                           />
                </Col>
                <Col md={2}>
                <Button>Generate Chart</Button>
                </Col>
            </Row>
        </FormGroup>

    </Form>
        {/* <Line data={data} className="fullsize" /> */}
      </div>
    </div>
  )
}
}

export default TrendsForm;