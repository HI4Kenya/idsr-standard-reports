import 'bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap/dist/js/bootstrap.bundle.min';
// import $ from 'jquery';
// import Popper from 'popper.js';
import React, { Component } from 'react';
//import './App.css';
//import DiseaseSpecific from './DiseaseSpecific';
// import IdsrTable from './IdsrTable';
// import MalariaCases from './MalariaCases';
// import MaternalDeaths from './MaternalDeaths';
// import FluenzaSpecimen from './FluenzaSpecimen';
import {Grid, Button } from 'react-bootstrap';
import { Row,Col,Card,CardBody } from 'reactstrap';
import ReportingRate from './ReportingRate';
class Report extends Component {
  render() {
    return (
        <div className="col-12" id="action_panel">
        <Card>
          <CardBody>
          <ul className="nav nav-tabs text-nowrap" id="myTab" role="tablist">
          <li className="nav-item">
            <a className="nav-link active" id="highlights-tab" data-toggle="tab" href="#highlights" role="tab" aria-controls="highlights" aria-selected="true">Highlights</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="rr_table-tab" data-toggle="tab" href="#rr_table" role="tab" aria-controls="rr_table" aria-selected="false">RR Table</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="rr_trends-tab" data-toggle="tab" href="#rr_trends" role="tab" aria-controls="rr_trends" aria-selected="false">RR Trends</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="disease_specific-tab" data-toggle="tab" href="#disease_specific" role="tab" aria-controls="disease_specific" aria-selected="false">Disease Specific</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="table-tab" data-toggle="tab" href="#table" role="tab" aria-controls="table" aria-selected="false">Table</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="full_report-tab" data-toggle="tab" href="#full_report" role="tab" aria-controls="full_report" aria-selected="false">Full Report</a>
          </li>
        </ul>
         
        <div className="tab-content content" id="myTabContent">
          <div className="tab-pane fade show active" id="highlights" role="tabpanel" aria-labelledby="highlights-tab">
          {/* <Highlights/> */}
            
            <p className="text-center">Highlights of the week (Nationally)</p>
            <div className="row">
              <div className="col">
                <p className="text-white bg-dark">Nationally</p>
                <p className="text-center">Disease Specific Reports</p>
                <p className="text-white bg-dark">Malaria</p>
                <p className="text-white bg-dark">Cholera</p>
                <p className="text-white bg-dark">Dengue Fever</p>
                <p className="text-white bg-dark">Acute malnutrition</p>
                <p className="text-white bg-dark">Rabies</p>
                <p className="text-white bg-dark">Acute Jaundice</p>
                <p className="text-white bg-dark">Neonatal Deaths</p>
              </div>
              <div className="col">
                <p className="text-white bg-dark">Measles</p>
                <p className="text-white bg-dark">Dysentery</p>
                <p className="text-white bg-dark">Typhoid fever</p>
                <p className="text-white bg-dark">Meningococcal Meningitis</p>
                <p className="text-white bg-dark">AFP</p>
                <p className="text-white bg-dark">NNT</p>
                <p className="text-white bg-dark">Guniea Worm</p>
                <p className="text-white bg-dark">Anthrax</p>
                <p className="text-white bg-dark">Influenza</p>
                <p className="text-white bg-dark">Maternal Deaths</p>

              </div>
            </div>
          </div>

          <div className="tab-pane fade" id="rr_table" role="tabpanel" aria-labelledby="rr_table-tab">
          <ReportingRate/>
          </div>
          <div className="tab-pane fade" id="rr_trends" role="tabpanel" aria-labelledby="rr_trends-tab">
            <div className="row" id="chart_section">

            </div>
          </div>
          <div className="tab-pane fade" id="disease_specific" role="tabpanel" aria-labelledby="disease_specific-tab">
            {/* <DiseaseSpecific/>
            <FluenzaSpecimen/>
            <MalariaCases/>
            <MaternalDeaths/> */}
          </div>
          <div className="tab-pane fade" id="table" role="tabpanel" aria-labelledby="table-tab">
          {/* <IdsrTable/> */}
          </div>
          <div className="tab-pane fade" id="full_report" role="tabpanel" aria-labelledby="full_report-tab">
          <div className="col-12">
            <Button primary={true}>Export PDF</Button>{  }
            <Button primary={true}>CSV</Button>
          </div>
          </div>

          </div>
          </CardBody>
        </Card>
        </div>
    );
  }
}

export default Report;
