import React from 'react';
import {Line as LineChart} from 'react-chartjs-2';
import { Row, Col } from 'react-bootstrap';
import { Button, Form, FormGroup,Card,CardHeader } from 'reactstrap';
import TrendsForm from './TrendsForm';
// import { Card } from 'material-ui';
// import { CardHeader } from '@material-ui/core';
const  axios = require('axios')

const api_host_3 = 'https://hiskenya.org/api/26/analytics.json?dimension=pe:LAST_12_WEEKS&dimension=ou:vvOK1BxTbet;HMNARUV2CW4;KGHhQ5GLd4k;Tvf1zgVZ0K4;MqnLxQBigG0;PFu8alU2KWG;uyOrcHZBpW0;nK0A12Q7MvS;bzOfj0iwfDH;Hsk1YV8kHkT;BjC1xL40gHo;ihZsJ8alvtb;qKzosKQPl6G;nrI2khZx3d0;Ulj33KBau7V;sPkRcDvhGWA;tAbBVBbueqD;j8o6iO4Njsi;N7YETT3A9r1;xuFdFy6t9AH;NjWSbQTwys4;yhCUgGcCcOo;BoDytkJQ4Qi;R6f9znhg37c;Eey8fT4Im3y;Y52XNJ50hYb;fVra3Pwta0Q;wsBsC6gjHvn;ahwTMNAJvrL;jkG3zaihdSs;ob6SxuRcqU4;t0J75eHKxz5;kqJ83J2D72s;uepLTG8wGWJ;mYZacFNIB3h;ptWVfaCIdVx;o36zCRjSd4G;u4t9H8XyU9P;QyGNX2DpR4h;JsH2bnvNt2d;T4urHM47nlm;mThvosEflAU;kphDeKClFch;pZqQRRW7PHP;sANMZ3lpqGs;CeLsrJOH0g9;XWALbfAPa6n&filter=dx:zJrL4HQqYmD.REPORTING_RATE&displayProperty=NAME&tableLayout=true&columns=pe&rows=ou'

const styles = {
 graphContainer: {
   border: '1px solid black',
   padding: '15px'
 }
}

class App3 extends React.Component {


 constructor(props) {
   super(props)
   this.state = {
     firstCharts: {},
     secondCharts:{},
     thirdCharts:{},
     fourthCharts:{},
     fifthCharts:{},
     sixthCharts:{},
     seventhCharts:{},
     eighthCharts:{},
     params: {
       //dimension:'pe:LAST_52_WEEKS',
       //dimension: 'ou:vvOK1BxTbet',
       //dimension: 'ou:HMNARUV2CW4',
       //dimension:'pe:LAST_52_WEEKS',
       //filter: 'dx:zJrL4HQqYmD.REPORTING_RATE',
       //filter : 'ou:KGHhQ5GLd4k'
     }
   }
 }

   componentDidMount(){
     this.get_data()
   }

   get_data(){
     //axios.get(api_host, {auth:{
    axios.get(api_host_3, {params: this.state.params,
       auth:{
       username: 'hi4kenya2018',
       password: 'Kenya#2018'}
     })
     .then((response)=>{
       var labels = response.data.metaData.dimensions.pe
       var Baringo= []
       var Bomet = []
       var Bungoma = []
       var Busia = []
       var Elgeyo = []
       var Embu = []
       var Garissa = []
       var HomaBay = []
       var Isiolo =[]
       var Kajiado = []
       var Kakamega =[]
       var Kericho =[]
       var Kiambu = []
       var Kilifi =[]
       var Kirinyaga = []
       var Kisii =[]
       var Kisumu = []
       var Kitui = []
       var Kwale =[]
       var Laikipia = []
       var Lamu = []
       var Machakos =[]
       var Makueni = []
       var Mandera = []
       var Marsabit = []
       var Meru = []
       var Migori = []
       var Mombasa = []
       var Muranga = []
       var Nairobi = []
       var Nakuru = []
       var Nandi = []
       var Narok = []
       var Nyamira =[]
       var Nyandarua = []
       var Nyeri = []
       var Samburu = []
       var Siaya = []
       var Taita = []
       var Tanariver = []
       var Tharaka = []
       var TransNzoia = []
       var Turkana = []
       var Uasin_Gishu = []
       var Vihiga = []
       var Wajir = []
       var West_Pokot = []


       for (var i = 4;i <56;i++){
         Baringo.push (response.data.rows[0][i])
         Bomet.push (response.data.rows[1][i])
         Bungoma.push (response.data.rows[2][i])
         Busia.push(response.data.rows[3][i])
         Elgeyo.push(response.data.rows[4][i])
         Embu.push(response.data.rows[5][i])
         Garissa.push(response.data.rows[6][i])
         HomaBay.push(response.data.rows[7][i])
         Isiolo.push(response.data.rows[8][i])
         Kajiado.push(response.data.rows[9][i])
         Kakamega.push(response.data.rows[10][i])
         Kericho.push(response.data.rows[11][i])
         Kiambu.push(response.data.rows[12][i])
         Kilifi.push(response.data.rows[13][i])
         Kirinyaga.push(response.data.rows[14][i])
         Kisii.push(response.data.rows[15][i])
         Kisumu.push(response.data.rows[16][i])
         Kitui.push(response.data.rows[17][i])
         Kwale.push(response.data.rows[18][i])
         Laikipia.push(response.data.rows[19][i])
         Lamu.push(response.data.rows[20][i])
         Machakos.push(response.data.rows[21][i])
         Makueni.push(response.data.rows[22][i])
         Mandera.push(response.data.rows[23][i])
         Marsabit.push(response.data.rows[24][i])
         Meru.push(response.data.rows[25][i])
         Migori.push(response.data.rows[26][i])
         Mombasa.push(response.data.rows[27][i])
         Muranga.push(response.data.rows[28][i])
         Nairobi.push(response.data.rows[29][i])
         Nakuru.push(response.data.rows[30][i])
         Nandi.push(response.data.rows[31][i])
         Narok.push(response.data.rows[32][i])
         Nyamira.push(response.data.rows[33][i])
         Nyandarua.push(response.data.rows[34][i])
         Nyeri.push(response.data.rows[35][i])
         Samburu.push(response.data.rows[36][i])
         Siaya.push(response.data.rows[37][i])
         Taita.push(response.data.rows[38][i])
         Tanariver.push(response.data.rows[39][i])
         Tharaka.push(response.data.rows[40][i])
         TransNzoia.push(response.data.rows[41][i])
         Turkana.push(response.data.rows[42][i])
         Uasin_Gishu.push(response.data.rows[43][i])
         Vihiga.push(response.data.rows[44][i])
         Wajir.push(response.data.rows[45][i])
         West_Pokot.push(response.data.rows[46][i])
        //  Kilifi.push(response.data.rows[47][i])
        }
//console.log(combined)
console.log(Baringo)
console.log(Bomet)
console.log(Wajir)

       this.setState({
         firstCharts:{
           labels: labels,
           datasets: [
             {
               label: "Bomet",
               data : Bomet,
               borderColor: 'rgb(255, 99, 132,1)',
               fill:false,
               tension : 0
             },
             {
               label : "Baringo",
               data : Baringo,
               borderColor: 'rgb(11, 95, 229,1)',
               fill:false,
               tension : 0
             },
             {
               label : "Bungoma",
               data: Bungoma,
               borderColor: 'rgb(0, 255, 4,1)',
               fill:false,
               tension : 0
             },
             {
               label : "Busia",
               data: Busia,
               borderColor: 'rgb(96, 94, 96,1)',
               fill:false,
               tension : 0
             },
              {
               label : "Elgeyo-Marakwet",
               data: Elgeyo,
               borderColor:'rgba(151,187,205,1)',
               fill:false,
               tension : 0
             },
              {
               label : "Embu",
               data: Embu,
               borderColor:'rgb(255, 0, 255,1)',
               fill:false,
               tension : 0
             }
             ]

         },
          secondCharts:{
           labels: labels,
           datasets: [
             {
               label: "Garissa",
               data : Garissa,
               borderColor: 'rgb(255, 99, 132,1)',
               fill:false,
               tension : 0
             },
             {
               label : "HomaBay",
               data : HomaBay,
               borderColor: 'rgb(11, 95, 229,1)',
               fill:false,
               tension : 0
             },
             {
               label : "Isiolo",
               data: Isiolo,
               borderColor: 'rgb(0, 255, 4,1)',
               fill:false,
               tension : 0
             },
             {
               label : "Kajiado",
               data: Kajiado,
               borderColor: 'rgb(96, 94, 96,1)',
               fill:false,
               tension : 0
             },
              {
               label : "Kakamega",
               data: Kakamega,
               borderColor:'rgba(151,187,205,1)',
               fill:false,
               tension : 0
             },
              {
               label : "Kericho",
               data: Kericho,
               borderColor:'rgb(255, 0, 255,1)',
               fill:false,
               tension : 0
             }
             ]

         },
         thirdCharts:{
           labels: labels,
           datasets: [
             {
               label: "Kiambu",
               data : Kiambu,
               borderColor: 'rgb(255, 99, 132,1)',
               fill:false,
               tension : 0
             },
             {
               label : "Kilifi",
               data : Kilifi,
               borderColor: 'rgb(11, 95, 229,1)',
               fill:false,
               tension : 0
             },
             {
               label : "Kirinyaga",
               data: Kirinyaga,
               borderColor: 'rgb(0, 255, 4,1)',
               fill:false,
               tension : 0
             },
             {
               label : "Kisii",
               data: Kisii,
               borderColor: 'rgb(96, 94, 96,1)',
               fill:false,
               tension : 0
             },
              {
               label : "Kisumu",
               data: Kisumu,
               borderColor:'rgba(151,187,205,1)',
               fill:false,
               tension : 0
             },
              {
               label : "Kitui",
               data: Kitui,
               borderColor:'rgb(255, 0, 255,1)',
               fill:false,
               tension : 0
             }
             ]

         },
         fourthCharts:{
           labels: labels,
           datasets: [
             {
               label: "Kwale",
               data : Kwale,
               borderColor: 'rgb(255, 99, 132,1)',
               fill:false,
               tension : 0
             },
             {
               label : "Laikipia",
               data : Laikipia,
               borderColor: 'rgb(11, 95, 229,1)',
               fill:false,
               tension : 0
             },
             {
               label : "Lamu",
               data: Lamu,
               borderColor: 'rgb(0, 255, 4,1)',
               fill:false,
               tension : 0
             },
             {
               label : "Machakos",
               data: Machakos,
               borderColor: 'rgb(96, 94, 96,1)',
               fill:false,
               tension : 0
             },
              {
               label : "Makueni",
               data: Makueni,
               borderColor:'rgba(151,187,205,1)',
               fill:false,
               tension : 0
             },
              {
               label : "Mandera",
               data: Mandera,
               borderColor:'rgb(255, 0, 255,1)',
               fill:false,
               tension : 0
             }
             ]

         },
         fifthCharts:{
           labels: labels,
           datasets: [
             {
               label: "Marsabit",
               data : Marsabit,
               borderColor: 'rgb(255, 99, 132,1)',
               fill:false,
               tension : 0
             },
             {
               label : "Meru",
               data : Meru,
               borderColor: 'rgb(11, 95, 229,1)',
               fill:false,
               tension : 0
             },
             {
               label : "Migori",
               data: Migori,
               borderColor: 'rgb(0, 255, 4,1)',
               fill:false,
               tension : 0
             },
             {
               label : "Mombasa",
               data: Mombasa,
               borderColor: 'rgb(96, 94, 96,1)',
               fill:false,
               tension : 0
             },
              {
               label : "Muranga",
               data: Muranga,
               borderColor:'rgba(151,187,205,1)',
               fill:false,
               tension : 0
             },
              {
               label : "Nairobi",
               data: Nairobi,
               borderColor:'rgb(255, 0, 255,1)',
               fill:false,
               tension : 0
             }
             ]

         },
          sixthCharts:{
           labels: labels,
           datasets: [
             {
               label: "Nakuru",
               data : Nakuru,
               borderColor: 'rgb(255, 99, 132,1)',
               fill:false,
               tension : 0
             },
             {
               label : "Nandi",
               data : Nandi,
               borderColor: 'rgb(11, 95, 229,1)',
               fill:false,
               tension : 0
             },
             {
               label : "Narok",
               data: Narok,
               borderColor: 'rgb(0, 255, 4,1)',
               fill:false,
               tension : 0
             },
             {
               label : "Nyamira",
               data: Nyamira,
               borderColor: 'rgb(96, 94, 96,1)',
               fill:false,
               tension : 0
             },
              {
               label : "Nyandarua",
               data: Nyandarua,
               borderColor:'rgba(151,187,205,1)',
               fill:false,
               tension : 0
             },
              {
               label : "Nyeri",
               data: Nyeri,
               borderColor:'rgb(255, 0, 255,1)',
               fill:false,
               tension : 0
             }
             ]

         },
         seventhCharts:{
           labels: labels,
           datasets: [
             {
               label: "Samburu",
               data : Samburu,
               borderColor: 'rgb(255, 99, 132,1)',
               fill:false,
               tension : 0
             },
             {
               label : "Siaya",
               data : Siaya,
               borderColor: 'rgb(11, 95, 229,1)',
               fill:false,
               tension : 0
             },
             {
               label : "Taita Taveta",
               data: Taita,
               borderColor: 'rgb(0, 255, 4,1)',
               fill:false,
               tension : 0
             },
             {
               label : "Tana River",
               data: Tanariver,
               borderColor: 'rgb(96, 94, 96,1)',
               fill:false,
               tension : 0
             },
              {
               label : "Tharaka Nithi",
               data: Tharaka,
               borderColor:'rgba(151,187,205,1)',
               fill:false,
               tension : 0
             },
              {
               label : "Trans Nzoia",
               data: TransNzoia,
               borderColor:'rgb(255, 0, 255,1)',
               fill:false,
               tension : 0
             }
             ]

         },
         eighthCharts:{
           labels: labels,
           datasets: [
             {
               label: "Turkana",
               data : Turkana,
               borderColor: 'rgb(255, 99, 132,1)',
               fill:false,
               tension : 0
             },
             {
               label : "Uasin Gishu",
               data : Uasin_Gishu,
               borderColor: 'rgb(11, 95, 229,1)',
               fill:false,
               tension : 0
             },
             {
               label : "Vihiga",
               data: Vihiga,
               borderColor: 'rgb(0, 255, 4,1)',
               fill:false,
               tension : 0
             },
             {
               label : "Wajir",
               data: Wajir,
               borderColor: 'rgb(96, 94, 96,1)',
               fill:false,
               tension : 0
             },
              {
               label : "West Pokot",
               data: West_Pokot,
               borderColor:'rgba(151,187,205,1)',
               fill:false,
               tension : 0
             }
             ]

         }
        
         
       })

   })

}

 render() {
   return (
     <div>
       <div className="col-10" id="chart_section">
       <TrendsForm/>
            {/* <Form>
          <FormGroup>
              <Row>
                  <Col md={5}>
                  <select class="selectpicker form-control input-place"  name="select_option" id="disease" onChange="setCode(this)" required>
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
      </Form> */}
      </div>
      <div className="row">
      <div className="col-12">
      <Card>
        <CardHeader>
        <LineChart data={this.state.firstCharts}/>
        </CardHeader>
      </Card>
      </div>
      </div>
     <br/>

     <div className="row">
      <div className="col-12">
        <Card>
          <CardHeader>
          <LineChart data={this.state.secondCharts}/>
          </CardHeader>
        </Card>
      </div>
      </div>
<br/>

      <div className="row">
      <div className="col-12">
        <Card>
          <CardHeader>
          <LineChart data={this.state.thirdCharts}/>
          </CardHeader>
        </Card>
      </div>
      </div>
      <br/>

      <div className="row">
      <div className="col-12">
        <Card>
          <CardHeader>
          <LineChart data={this.state.fourthCharts}/>
          </CardHeader>
        </Card>
      </div>
      </div>
      <br/>

      <div className="row">
      <div className="col-12">
        <Card>
          <CardHeader>
          <LineChart data={this.state.fifthCharts}/>
          </CardHeader>
        </Card>
      </div>
      </div>
      <br/>

      <div className="row">
      <div className="col-12">
        <Card>
          <CardHeader>
          <LineChart data={this.state.sixthCharts}/>
          </CardHeader>
        </Card>
      </div>
      </div>
      <br/>

      <div className="row">
      <div className="col-12">
        <Card>
          <CardHeader>
          <LineChart data={this.state.seventhCharts}/>
          </CardHeader>
        </Card>
      </div>
      </div>
      <br/>

      <div className="row">
      <div className="col-12">
        <Card>
          <CardHeader>
          <LineChart data={this.state.eighthCharts}/>
          </CardHeader>
        </Card>
      </div>
      </div>

     {/* <div style={styles.graphContainer}> 
     </div>
      <div style={styles.graphContainer}>
       <LineChart data={this.state.thirdCharts}
         />
     </div>
       <div style={styles.graphContainer}>
       <LineChart data={this.state.fourthCharts}
         />
     </div>
     <div style={styles.graphContainer}>
       <LineChart data={this.state.fifthCharts}
         />
     </div>
      <div style={styles.graphContainer}>
       <LineChart data={this.state.sixthCharts}
         />
     </div>
      <div style={styles.graphContainer}>
       <LineChart data={this.state.seventhCharts}
         />
     </div>
      <div style={styles.graphContainer}>
       <LineChart data={this.state.eighthCharts}
         />
     </div> */}

     </div>
     
   )
 }
}

export default App3;