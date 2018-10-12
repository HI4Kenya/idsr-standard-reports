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

class MtKenya extends Component {


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
       
       var Embu = []
       var Kiambu = []
       var Kirinyaga = []
       var Laikipia = []
       var Meru = []
       var Muranga = []
       var Nakuru = []
       var Nyandarua = []
       var Nyeri = []
       var Tharaka = []
       


       for (var i = 4;i <56;i++){
         Embu.push(response.data.rows[5][i])
         Kiambu.push(response.data.rows[12][i])
         Kirinyaga.push(response.data.rows[14][i])
         Laikipia.push(response.data.rows[19][i])
         Meru.push(response.data.rows[25][i])
         Muranga.push(response.data.rows[28][i])
         Nakuru.push(response.data.rows[30][i])
         Nyandarua.push(response.data.rows[34][i])
         Nyeri.push(response.data.rows[35][i])
         Tharaka.push(response.data.rows[40][i])
        //  Kilifi.push(response.data.rows[47][i])
        }

       this.setState({
         Charts:{
           labels: labels,
           datasets: [
             {
               label: "Embu",
               data : Embu,
               borderColor: 'rgb(255, 99, 132,1)',
               fill:false,
               tension : 0
             },
             {
                label: "Kiambu",
               data : Kiambu,
               borderColor: 'rgb(255, 99, 132,1)',
               fill:false,
               tension : 0
             },
                {
                label: "Kirinyaga",
               data : Kirinyaga,
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
               label : "Meru",
               data: Meru,
               borderColor: 'rgb(0, 255, 4,1)',
               fill:false,
               tension : 0
             },
             {
               label : "Muranga",
               data:Muranga,
               borderColor: 'rgb(96, 94, 96,1)',
               fill:false,
               tension : 0
             },
              {
               label : "Nakuru",
               data: Nakuru,
               borderColor:'rgba(151,187,205,1)',
               fill:false,
               tension : 0
             },
              {
               label : "Nyandarua",
               data: Nyandarua,
               borderColor:'rgb(255, 0, 255,1)',
               fill:false,
               tension : 0
             },
                   {
               label : "Nyeri",
               data: Nyeri,
               borderColor:'rgb(255, 0, 255,1)',
               fill:false,
               tension : 0
             },
                      {
               label : "Tharaka Nithi",
               data: Tharaka,
               borderColor:'rgb(255, 0, 255,1)',
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

export default MtKenya;