import 'bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { Component } from 'react';
import { Container, Row, Col, Table,Button } from 'reactstrap';
import './App.css';

class IdsrTable extends Component {

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        {/* <Jumbotron> */}
                            <p>Disease Surveillance & Response Unit</p><br/>
                            <Button>Export PDF</Button>{ }
                            <Button>CSV</Button>
                        <Col md={12}>
                            <Table striped bordered condensed hover responsive>
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
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Nairobi</td><td>20</td><td>18</td><td>97</td><th>80</th><td>33</td><td>100</td><td>33</td><td>14</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Nakuru</td><td>20</td><td>18</td><td>97</td><th>80</th><td>33</td><td>100</td><td>33</td><td>14</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Kisumu</td><td>20</td><td>18</td><td>97</td><th>80</th><td>33</td><td>100</td><td>33</td><td>14</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">4</th>
                                        <td>Mombasa</td><td>20</td><td>18</td><td>97</td><th>80</th><td>33</td><td>100</td><td>33</td><td>14</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">5</th>
                                        <td>Kakamega</td><td>20</td><td>18</td><td>97</td><th>80</th><td>33</td><td>100</td><td>33</td><td>14</td>
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