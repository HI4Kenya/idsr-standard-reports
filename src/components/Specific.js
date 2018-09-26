import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import {Chart} from 'chart.js';
import {Card,CardHeader} from 'reactstrap';
import {Button} from 'react-bootstrap';
import * as jsPDF from 'jspdf';
import './App.css';
var data = {
  labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"],
  datasets: [{
    label: "Measles",
    legend: {
      display: true,
      position: 'right'
    },
    backgroundColor: '#FF00FF',
    // borderColor: 'rgb(255, 99, 132)',
    data: [4, 14, 12, 2, 1],
  },
  {
    label: "Rubella",
    backgroundColor: '#6495ED',
    data: [3, 10, 5, 2, 20],
  }]
}

// var canvas = document.querySelector('#cool-canvas');
// var context = canvas.getContext("2d");
// new Chart(context).Bar(data);

// document.getElementById('download-pdf').addEventListener("click", downloadPDF);

// function downloadPDF() {
//   var canvas = document.querySelector('#cool-canvas');
// 	//creates image
// 	var canvasImg = canvas.toDataURL("image/jpeg", 1.0);
  
// 	//creates PDF from img
// 	var doc = new jsPDF('landscape');
// 	doc.setFontSize(20);
// 	doc.text(15, 15, "Cool Chart");
// 	doc.addImage(canvasImg, 'JPEG', 10, 10, 280, 150 );
// 	doc.save('canvas.pdf');
// }

class Specific extends Component {

  render() {
    return (
      <div className="row">
        <h4>Malaria & Rubella</h4>
        <div className="col-12">
        <Card>
            <CardHeader>
            <div className="row">
            <div className="col-8"></div>
            <div className="col-4">
            <Button bsStyle="success" bsSize="small" id="download-pdf">Export Pdf</Button>{' '}
            <Button bsStyle="success" bsSize="small">PNG</Button>{' '}
            </div>    
            </div>
            </CardHeader>
        </Card>
        </div>
        <div className="col-12" id="cool-canvas">
          <Bar data={data} className="fullsize" />
        </div>
      </div>
    )
  }
}

export default Specific;

