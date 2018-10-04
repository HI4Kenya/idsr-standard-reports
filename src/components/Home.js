import 'bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { Component } from 'react';
import logo from './logo.png';
// import logo from './logo.svg';
// import {Button} from '@material-ui/core';
// import {Link} from 'react-router-dom';
import TopBar from './TopBar';
//import {Card,CardHeader,CardBody} from 'reactstrap';
import { Card, CardHeader, CardContent, CardActions, IconButton, Typography } from '@material-ui/core';
import Edit from '@material-ui/icons/Edit';
import {Link} from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-12">
          <TopBar />
        </div>
        <div className="container-fluid">
        <br/>
          <div className="container">
          <div className="row">
          <div className="col-12">
            <img src={logo} alt={""}/>
            </div>
          </div><br/>

            <div className="row">
            <div className="col-4"></div>
              <div className="col-4">
                <Card className='card'>
                  <CardHeader
                    title="Weekly Bulletin"
                    subheader="Weekly Epidemiological Bulletin"
                  />
                  <CardContent>
                    <Typography component="p">
                      Get started with Weekly Bulletin report generation. 
                    </Typography>
                  </CardContent>
                  <CardActions className='actions' disableActionSpacing>
                    <IconButton aria-label="Edit bulletin" className="edit">
                      <Edit />
                    </IconButton>
                    {/* <Link to="/MainPage">Click to start</Link> */}
                    <Link to="/Dashboard">Click to start</Link>
                  </CardActions>

                </Card>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Home;
