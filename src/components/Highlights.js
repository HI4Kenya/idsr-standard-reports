import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import './App.css';
import { Card, CardHeader, CardContent, Button } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import uniqueId from 'react-html-id';
import DatePicker from 'react-datepicker';
import { ifError } from 'assert';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

const titles = ["Nationally", "Malaria", "Cholera", "Dengue Fever", "Acute Malnutrition", "Rabies", "Acute Jaundice",
  "Neonatal Deaths", "Measles", "Dysentry", "Typhoid fever", "Meningococcal Meningitis", "AFP", "Neonatal Tetanus (NNT)",
  "Guniea Worm", "Anthrax", "Influenza", "Maternal Deaths"]

const half = Math.floor(titles.length / 2);


class Highlights extends Component {

  constructor(props) {
    super(props);

    this.state = {
      highlights: [],
      cases: [],
      deaths: [],
    };

    this.getData = this.getData.bind(this);
    // this.createLists = this.createLists.bind(this);
    uniqueId.enableUniqueIds(this)
    this.displayCases = this.displayCases.bind(this);
    this.displayDeaths = this.displayDeaths.bind(this);
    this.addCases = this.addCases.bind(this);
  }

  getData() {
    axios({
      method: 'get',
      url: 'https://hiskenya.org/api/analytics.json?dimension=dx:AoNid8qa4iP;duEwnPpZTeJ;YrVngLCNhCN;IPzqbhBXzYI;QcCSmjw0E1t;mdLORcOXNVC;XUmIT8vmtB8;SvGX6aqR44S;VIbr1Dhv7Zt;RLzaFBwaWFN;mxWEOiayWem;MqEYVvHFn4C;aoDMYH6STyu;rNvGKtwbte6;k99fKerg18p;aS7l3UKgTEL;ZpEL8teGmpy;SvFYd0EZdF1;hInp9Yu39ap;DyCmCMGhcaT;aqtAtDtbywp;vqyFNp0Tyjj;cILf2i4484b;Iq9dK8PQGks;ODPXXGbNVz3;iZa8X0R8DC2;MjpTjUPSLY6;pxZwZGa3S79;rQT7Z4eJmQp;Uaezmz9SzNy;hUIVHkS4Zt4;o6UNt4eaw0C;WNovNDcvhHl;QMk6rJZtBT9;ntWgkwXCFp2;bZNWTQiGyPx;dwFMOqpWdJw;rl6ivYvMVKJ;WnKnWVYZ6eX;WQNqVsRWbje;FL1TjrtvExn;piQnwzWtwea;SpdUqIVx8ik;lVdrgTPxzHO;eCcSxVr5BYD;NEuSmgwbwzR;vzVMT5xJLQR;SIKZR5L29QV;kUMdI6Ip4rm;DHf4qRMuNVZ&dimension=pe:2018W33&filter=ou:HfVjCurKxh2&displayProperty=NAME&outputIdScheme=NAME',
      auth: {
        username: 'hi4kenya2018',
        password: 'Kenya#2018'
      }
    })
      .then(response => {
        //var labels = response.data.metaData.pe
        var cases = []
        var deaths = []

        //  console.log(response.data.rows)

        var data = response.data.rows
        for (var i = 0; i < data.length; i++) {
          var match = ["Cases", "Deaths"]
          var regexMatch = new RegExp(match.join("|"), 'gi')

          var reply = regexMatch.test(data[i][0])
          if (reply) {
            if (data[i][0].includes("Cases")) {
              cases.push([data[i][0], data[i][2]])
              //  this.addCases();

            } else {
              deaths.push([data[i][0], data[i][2]])

            }
          } else {
            console.log("Not a match")
          }
        }

        this.setState({
          cases: cases,
          deaths: deaths,

        })

        //  console.log(this.state.cases)
        //  console.log(this.state.deaths)
      })

  }


  componentDidMount() {
    this.getData();
  }

  columns() {

    console.log(titles.length)
    return (
      titles.map((title) =>
        (
          <div className="col-md-6">
            <div className="columnHeadings">
              <Typography variant="title" gutterBottom style={{ backgroundColor: '#C455C5' }} key={this.nextUniqueId}>
                {title}
              </Typography>
              <ul>
                <li id={title + "caseId"}>No case was reported in the week. </li>
                <li id={title + "deathId"}>No death was reported in the week.</li>
              </ul>

            </div>

          </div>

        ))


    );
  }

  addCases() {
    var cases = this.state.cases,
      x = new Array("No case was reported in the week.", "0"),
      count = titles.length - cases.length

    for (var i = 0; i < count; i++) {
      cases.push(x);
    }

    this.setState({
      cases: cases
    })

    // console.log(cases);  
  }

  displayCases() {
    var cases = this.state.cases;
    var deaths = this.state.deaths;
    var newCaseArray = new Array();
    var newDeathArray = new Array();

    //node list
    var caseElement = document.querySelectorAll('[id$="caseId"]');
    var deathElement = document.querySelectorAll('[id$="deathId"]');


  
    for(var i=0; i<titles.length; i++){
      for(var j=0; j<cases.length; j++){
        if(cases[j][0].includes(titles[i])){
          // console.log(cases[j][0], " ", titles[i])
          newCaseArray.push([cases[j], titles[i]])
        } } }


    for(var i=0; i<newCaseArray.length; i++){
      for(var j=0; j<caseElement.length; j++){
        if(caseElement[j].id.includes(newCaseArray[i][1])){
          // console.log(cases[j][0], " ", titles[i])
          newCaseArray[i].push(caseElement[j])
        }     
      }

    //  console.log(newArray[i][2])
   }

    for(var i=0; i<newCaseArray.length; i++){
      newCaseArray[i][2].innerHTML = "Reported Cases: " + newCaseArray[i][0][1]
      // console.log(newArray[i][2])
    }

    console.log(newDeathArray)
       console.log(newCaseArray)
      
  }

  displayDeaths() {
    var deaths = this.state.deaths;
    var newDeathArray = new Array();

    //node list
    var deathElement = document.querySelectorAll('[id$="deathId"]');


  
    for(var i=0; i<titles.length; i++){
      for(var j=0; j<deaths.length; j++){
        if(deaths[j][0].includes(titles[i])){
          // console.log(cases[j][0], " ", titles[i])
          newDeathArray.push([deaths[j], titles[i]])
        } } }


    for(var i=0; i<newDeathArray.length; i++){
      for(var j=0; j<deathElement.length; j++){
        if(deathElement[j].id.includes(newDeathArray[i][1])){
          // console.log(cases[j][0], " ", titles[i])
          newDeathArray[i].push(deathElement[j])
        }     
      }

    //  console.log(newArray[i][2])
   }

    for(var i=0; i<newDeathArray.length; i++){
      newDeathArray[i][2].innerHTML = "Deaths: " + newDeathArray[i][0][1]
      // console.log(newArray[i][2])
    }

    console.log(deaths)
    console.log(newDeathArray)
     
  }



  render() {
    const classes = this.props;
    console.log(this.state.cases);


    return (
      <div >
        <h4 className="text-center">Highlights of the week (Nationally)</h4>
        <Button onClick={this.displayCases.bind(this)}>Click</Button>
        <Button onClick={this.displayDeaths.bind(this)}>Click2</Button> 
        
        <div>
          <Paper className={classes.root} elevation={1}>

            <div className="row">
              {this.columns()}

            </div>
          </Paper>
        </div>


      </div>

    )
  }

}

Highlights.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Highlights);