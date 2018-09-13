import React, { Component } from "react";
import {AppBar,Toolbar,Typography, Button} from '@material-ui/core'
import {Link} from 'react-router-dom';
// import Dashboard from "./Dashboard";
const TopBar = () => {
    return(
        <div className="row">
        <div className="col-12">
        {/* position="static" */}
        <AppBar>
            <Toolbar>
                <Typography variant="title" color="inherit">
                <h3>Integrated Disease Surveillance and Response</h3>
                </Typography>
                <Link to="/MainPage">Touch Me</Link>
            </Toolbar>
        </AppBar>
        {/* <Dashboard/> */}
        </div>
        </div>
    )
}
export default TopBar;