import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { Component } from 'react';
import { Row, Col, Table,Button } from 'reactstrap';
import {Grid} from 'react-bootstrap';
import './App.css';

class MaternalDeaths extends Component {

render() {
return (
<div>
<Grid>
<Row>
    <h3>Summary of Cumulative No of Maternal Deaths</h3>
    <Button>Export PDF</Button>{' '}
    <Button>CSV</Button>
<Col md={11}>
    <Table striped bordered condensed hover responsive>
        <thead>
            <tr>
                <th>#</th>
                <th>County</th>
                <th>No of Deaths</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">1</th>
                <td>Nairobi</td>
                <td>20</td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td>Kisumu</td>
                <td>18</td>
            </tr>
        </tbody>
    </Table>
</Col>
</Row>
</Grid>
</div>
)
}
}

export default MaternalDeaths;