import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import ReactToExcel from 'react-html-table-to-excel';
import CsvDownloader from 'react-csv-downloader';
import React, { Component } from 'react';
import { Row, Col, Table,Card,CardHeader } from 'reactstrap';
import {Grid,Button} from 'react-bootstrap';
import './App.css';

class MaternalDeaths extends Component {
    constructor(props){
        super(props);
        this.state={
            county:[],
        }
    }
    componentDidMount(){
        this.fetchdata();
    }
    fetchdata(){
        this.setState({
            county:[]
        })
        const headers = {
            headers: {
                'Authorization': `Basic ${btoa('hi4kenya2018:Kenya#2018')}`
            }
        }
        fetch('https://hiskenya.org/api/26/analytics.json?dimension=pe:THIS_YEAR&dimension=ou:vvOK1BxTbet;HMNARUV2CW4;KGHhQ5GLd4k;Tvf1zgVZ0K4;MqnLxQBigG0;PFu8alU2KWG;uyOrcHZBpW0;nK0A12Q7MvS;bzOfj0iwfDH;Hsk1YV8kHkT;BjC1xL40gHo;ihZsJ8alvtb;qKzosKQPl6G;nrI2khZx3d0;Ulj33KBau7V;sPkRcDvhGWA;tAbBVBbueqD;j8o6iO4Njsi;N7YETT3A9r1;xuFdFy6t9AH;NjWSbQTwys4;yhCUgGcCcOo;BoDytkJQ4Qi;R6f9znhg37c;Eey8fT4Im3y;Y52XNJ50hYb;fVra3Pwta0Q;wsBsC6gjHvn;ahwTMNAJvrL;jkG3zaihdSs;ob6SxuRcqU4;t0J75eHKxz5;kqJ83J2D72s;uepLTG8wGWJ;mYZacFNIB3h;ptWVfaCIdVx;o36zCRjSd4G;u4t9H8XyU9P;QyGNX2DpR4h;JsH2bnvNt2d;T4urHM47nlm;mThvosEflAU;kphDeKClFch;pZqQRRW7PHP;sANMZ3lpqGs;CeLsrJOH0g9;XWALbfAPa6n&filter=dx:lJotmrRnSnD&displayProperty=NAME&outputIdScheme=NAME', headers)
            .then(response => response.json())
            .then(parsedJSON => parsedJSON.rows.map(maternalDeath => (
                {

                    countyName: `${maternalDeath[1]}`,
                    no: `${maternalDeath[2]}`

                }
            )))
            .then(county => this.setState({ county }))
            .catch(error => console.log('parsed error', error))
    }

render() {
    const { county } = this.state;
return (
<div>
<Grid>
<Row>
    <h4>Summary of Cumulative No of Maternal Deaths</h4>
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
        table="maternal_deaths"
        filename="excelFile"
        sheet="sheet 1"
        buttonText="Export Excel"
        />
        </div>
        
        </div>
        </CardHeader>
    </Card>
    </div>
    
    {/* <Button>Excel</Button> */}
<Col md={12}>
    <Table striped bordered condensed hover responsive id="maternal_deaths">
        <thead>
            <tr>
                <th>County</th>
                <th>No of Deaths</th>
            </tr>
        </thead>
        <tbody>
            {
                county.map(data => {
                    return <tr>
                        <td> {data.countyName}</td>
                        <td> {data.no}</td>
                    </tr>
                })
            }
            
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