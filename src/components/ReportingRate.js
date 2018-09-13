import 'bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import './App.css';


class ReportingRate extends Component {
    constructor(props){
        super(props)
          this.state={
            regions:[],
          }
        
      }
      componentDidMount(){
      this.fetchdata();
      }

      fetchdata(){
          this.setState({
            regions:[]
          })
          const headers ={
            headers:{
           'Authorization': `Basic ${btoa('polar:Polar123')}`
            }
          }
          fetch('http://197.136.81.99:8082/test/api/25/organisationUnits.json?level=2',headers)
          .then(response =>response.json())
          .then(parsedJSON=>parsedJSON.organisationUnits.map(organisationUnitLevel=>(
              {
   
              orgUnitId: `${organisationUnitLevel.id}`,
              orgUnitName: `${organisationUnitLevel.displayName}`
   
          }
      )))
      .then(regions=>this.setState({regions}))
       .catch(error=>console.log('parsed error', error))
      }
    render() {
        //const { name }=this.props;
       const {regions}  =this.state;
        return (
            <div>
                <Container>
                    <Row>
                        <Col md={12}>
                            <Button>Export PDF</Button>{} <Button>CSV</Button>
                            <p className="text-center">County Surveillance Indicators</p>
                            {/* <select class="form-control input-place" id="exampleFormControlSelect1">

                          {
                              regions.map(region=>{
                              return <option key={region.orgUnitId }> {region.orgUnitName }</option>
                              })
                          }
                           </select> */}
                            <table className="table table-striped table-bordered">
                                <thead>
                                    <tr>
                                        <th scope="col">County</th>
                                        <th scope="col">No of Sub-Counties</th>
                                        <th scope="col">Reporting Sub-Counties</th>
                                        <th scope="col">Complete Reports</th>
                                        <th scope="col">Intra-District Average</th>
                                        <th scope="col">Timeliness</th>
                                        <th scope="col">Completeness</th>
                                        <th scope="col">Weighted Avg.</th>
                                    </tr></thead>
                                <tbody>
                                   
                                        {
                                            
                                             regions.map(region=>{
                                                var x =1;
                                                return <tr>
                                                    <td> {region.orgUnitName }</td>
                                                    </tr>
                                                })
                                                
                                        }
                                        {/* <td>Kisumu</td> */}
                                  

                                </tbody>

                            </table>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}


export default ReportingRate;