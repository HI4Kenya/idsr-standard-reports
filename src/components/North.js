import React, {Component} from 'react';
import {Line as LineChart} from 'react-chartjs-2';
// import {axios} from 'axios'
//import * as countylist from '../countylist.json'
const  axios = require('axios')

// const api_host = "http://197.136.81.99:8082/test/api/25/analytics.json?dimension=pe:LAST_52_WEEKS"
// const api_host_2 = 'http://197.136.81.99:8082/test/api/25/analytics.json?dimension=dx:zJrL4HQqYmD.REPORTING_RATE;&dimension=pe:LAST_52_WEEKS&dimension=ou:vvOK1BxTbet;HMNARUV2CW4'
const api_host_3 = 'https://hiskenya.org/api/26/analytics.json?dimension=pe:LAST_12_WEEKS&dimension=ou:vvOK1BxTbet;HMNARUV2CW4;KGHhQ5GLd4k;Tvf1zgVZ0K4;MqnLxQBigG0;PFu8alU2KWG;uyOrcHZBpW0;nK0A12Q7MvS;bzOfj0iwfDH;Hsk1YV8kHkT;BjC1xL40gHo;ihZsJ8alvtb;qKzosKQPl6G;nrI2khZx3d0;Ulj33KBau7V;sPkRcDvhGWA;tAbBVBbueqD;j8o6iO4Njsi;N7YETT3A9r1;xuFdFy6t9AH;NjWSbQTwys4;yhCUgGcCcOo;BoDytkJQ4Qi;R6f9znhg37c;Eey8fT4Im3y;Y52XNJ50hYb;fVra3Pwta0Q;wsBsC6gjHvn;ahwTMNAJvrL;jkG3zaihdSs;ob6SxuRcqU4;t0J75eHKxz5;kqJ83J2D72s;uepLTG8wGWJ;mYZacFNIB3h;ptWVfaCIdVx;o36zCRjSd4G;u4t9H8XyU9P;QyGNX2DpR4h;JsH2bnvNt2d;T4urHM47nlm;mThvosEflAU;kphDeKClFch;pZqQRRW7PHP;sANMZ3lpqGs;CeLsrJOH0g9;XWALbfAPa6n&filter=dx:zJrL4HQqYmD.REPORTING_RATE&displayProperty=NAME&tableLayout=true&columns=pe&rows=ou'



const styles = {
 graphContainer: {
   border: '1px solid black',
   padding: '15px',
   width:'210mm'
 }
}

class North extends Component {


 constructor(props) {
   super(props)
   this.state = {
     Charts: {},
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
       
       var Turkana = []
       var Samburu = []
       var WestPokot = []
       var Baringo = []
       var UasinGishu =[]
       var TransNzoia = []
       var Elgeyo =[]
       


       for (var i = 4;i <56;i++){
        Baringo.push (response.data.rows[0][i])
        Elgeyo.push(response.data.rows[4][i])       
        TransNzoia.push(response.data.rows[41][i])
        Turkana.push(response.data.rows[42][i])
        UasinGishu.push(response.data.rows[43][i])
        WestPokot.push(response.data.rows[46][i])
       }


       this.setState({
         Charts:{
           labels: labels,
           datasets: [
             {
               label: "Baringo",
               data : Baringo,
               borderColor: 'rgb(255, 99, 132,1)',
               fill:false,
               tension : 0
             },
             {
               label : "Elgeyo",
               data : Elgeyo,
               borderColor: 'rgb(11, 95, 229,1)',
               fill:false,
               tension : 0
             },
             {
               label : "Trans-Nzoia",
               data: TransNzoia,
               borderColor: 'rgb(0, 255, 4,1)',
               fill:false,
               tension : 0
             },
             {
               label : "Turkana",
               data:Turkana,
               borderColor: 'rgb(96, 94, 96,1)',
               fill:false,
               tension : 0
             },
             {
               label : "Uasin-Gishu",
               data:UasinGishu,
               borderColor: 'rgb(96, 94, 96,1)',
               fill:false,
               tension : 0
             },
             {
               label : "West-Pokot",
               data:WestPokot,
               borderColor: 'rgb(96, 94, 96,1)',
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
     <div style={styles.graphContainer}>
       <LineChart data={this.state.Charts}
         />
     </div>
     </div>
     


   )
 }
}

export default North;