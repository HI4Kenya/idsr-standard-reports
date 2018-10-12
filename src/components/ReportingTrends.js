import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import {Form,FormGroup} from 'reactstrap';
import './App.css';
import Other from './Other';
import Lake from './Lake';
import Lake2 from './Lake2';
import Frontier from './Frontier';
import Pwani from './Pwani';
import North from './North';
import MtKenya from './MtKenya';
import South from './SouthEastern';
import App3 from './App3';

class ReportingTrends extends Component {
  constructor(props){
    super(props);
    this.state={choice:""}

  }
    //constructor with state to hold current choice
    //this.state = { choice:"0" }

  handleChange(event){
    var selected=event.target.value
    //change the state of selection
    this.setState({choice:selected})
  }

    printDocument() {
    const input = document.getElementById('Charts');
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF({
  // orientation: 'potrait',
  // unit: 'in',
  // format: [20,15]
});
        pdf.addImage(imgData, 'JPEG', 0, 0);
        // pdf.output('dataurlnewwindow');
        pdf.save("Charts.pdf");
        // pdf('p', 'mm', [297, 500])
      })
    ;
  }


  render() {
    //select which one to render depending on this.state.choice
    let chart=this.state.choice;
    switch (chart) {
        case "1":
        chart=<North/>
        break;
        case "2":
        chart=<Lake/>,<Lake2/>
        // chart=<Lake2/>
        break;
        case "3":
        chart=<Frontier/>
        break;
        case "4":
        chart=<MtKenya/>
        break;
        case "5":
        chart=<South/>
        break;
        case "6":
        chart=<Pwani/>
        break;
        case "7":
        chart=<Other/>
        break;
         case "8":
        chart=<MtKenya/>
        break;
    
      default:
      chart = <App3/>
        break;
    }
    return (
      <div>
      <div className="mb5">
        <button onClick={this.printDocument}>Export PDF</button>
      </div>
        <div className="row">
      <Form>
        <FormGroup>
          <select className="form-control" onChange={this.handleChange.bind(this)}>
            <option value="">~~Select Region~~</option>
            <option value="1">North Rift Economic Bloc</option>
            <option value="2">Lake Region Economic Bloc</option>
            <option value="3">Frontier Counties Development Council</option>
            <option value="4">Mt. Kenya & Aberdare</option>
            <option value="5">South Eastern Kenya Economic Bloc</option>
            <option value="6">Jumuiya ya Kaunti za Pwani</option>
            <option value="7">Other Regions</option>
          </select>
        </FormGroup>
      </Form>
      {/* rendering area depending on choice */}
       
      </div>
      <div id="Charts">
      {chart}
      </div>
      </div>
    )
  }
}

export default ReportingTrends;

