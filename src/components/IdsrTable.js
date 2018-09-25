import 'bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap/dist/js/bootstrap.bundle.min';
import ReactToExcel from 'react-html-table-to-excel';
import React, { Component } from 'react';
import { Container, Row, Col, Table, Button, Card, CardHeader } from 'reactstrap';
import './App.css';

class IdsrTable extends Component {

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        {/* <Jumbotron> */}
                        <p>Disease Surveillance & Response Unit</p><br />
                        <div className="col-12">
                            <Card>
                                <CardHeader>
                                    <div className="row">
                                        <div className="col-6"></div>
                                        <div className="col-6">
                                            <Button bsStyle="success" bsSize="small">Export Pdf</Button>{' '}
                                            <Button bsStyle="success" bsSize="small">Export CSV</Button>{' '}
                                            {/* <CsvDownloader
                                            filename="csvFile"
                                            text="Test"
                                            /> */}
                                            <ReactToExcel
                                                table="idsr"
                                                filename="excelFile"
                                                sheet="sheet 1"
                                                buttonText="Export Excel"
                                            />
                                        </div>

                                    </div>
                                </CardHeader>
                            </Card>
                        </div>
                        <Col md={12}>
                            <Table striped bordered condensed hover responsive id="idsr">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>County</th>
                                        <th>Expected Reports</th>
                                        <th>Received Reports</th>
                                        <th>%RR</th>
                                        <th>%Timely</th>
                                        <th>Malaria</th>
                                        <th>Tested</th>
                                        <th>Positive</th>
                                        <th>Positivity</th>
                                        <th>Cholera</th>
                                        <th>Typhoid</th>
                                        <th>Dysentry</th>
                                        <th>Measles</th>
                                        <th>MM</th>
                                        <th>Plague</th>
                                        <th>Yellow Fever</th>
                                        <th>Other VHF</th>
                                        <th>AFP</th>
                                        <th>NNT</th>
                                        <th>Acute Jaundice</th>
                                        <th>Dengue</th>
                                        <th>Anthrax</th>
                                        <th>Acute Malnutrition</th>
                                        <th>Maternal Deaths</th>
                                        <th>Guinea Worms</th>
                                        <th>Neonatal Deaths</th>
                                        <th>Rabies</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Nairobi</td><td>20</td><td>18</td><td>97</td><th>80</th><td>33</td><td>100</td><td>33</td><td>14</td><td>20</td><td>18</td><td>97</td><th>80</th>
                                        <td>33</td><td>100</td><td>33</td><td>14</td><td>33</td><td>14</td><td>20</td><td>18</td><td>97</td><th>80</th><td>33</td><td>100</td><td>33</td><td>14</td>
                                    </tr>
                                </tbody>
                            </Table>

                        </Col>
                        {/* </Jumbotron> */}
                    </Row>
                </Container>
            </div>
        )
    }
}


export default IdsrTable;