import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {Drawer,AppBar,Toolbar,Divider,Typography, FormGroup} from '@material-ui/core/';
import { Card, CardHeader, Button, Form } from 'reactstrap';
import './App.css';
//import SideBar from './SideBar';
import {Link} from 'react-router-dom';
import NavTabs from './NavTabs';

const drawerWidth = 0;

const styles = theme => ({

    root: {
        flexGrow: 1,
        height: '100%',
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
    },

    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    drawerPaper: {
        position: 'relative',
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
        minWidth: 0, // So the Typography noWrap works
    },
    toolbar: theme.mixins.toolbar,
});

class Dashboard extends Component{
    showAlert(){
        alert("testing");
        // <SpecificWeekReport/>
    }
    handleChange(){
    console.log("testing");
    }
    render(){
        const { classes } = this.props;
        return(
            <div className={classes.root}>
            <AppBar position="absolute" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="title" color="inherit" noWrap>
                        Integrated Disease Surveillance and Response
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}   
            >
                <div className={classes.toolbar} />
                {/* <SideBar/> */}
                <Divider />
            </Drawer>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Typography >
                    <div className="row">
                        <div className="col-12" align="left">
                        
                        <Card>
                            <CardHeader>
                            <Link to="MainPage">Next</Link>
                                {/* <Button>Update</Button> */}
                            </CardHeader>
                        </Card>                    
                        </div>
                         
                    </div><br/>
                    <div className="row">
                        <div className="col-4">
                                           
                        </div>
                        <div className="col-4">
                        
                         <Form>
                             <FormGroup>
                                <div className="row">
                                   <div className="col-8">
                                   <select className="form-control" name="wk" onChange={this.handleChange} required>
                                        <option value="">Select Week</option>
                                        <option value="2017W33">2017W33</option>
                                        <option value="2017W34">2017W34</option>
                                        <option value="2017W35">2017W35</option>
                                        <option value="2017W36">2017W36</option>
                                   </select>
                                   </div> 
                                   <div className="col-4">
                                   <Button name="report" onClick={this.showAlert}>Get Report</Button>
                                   </div>
                                </div>
                             </FormGroup>
                         </Form>
                                          
                        </div>
                        <div className="col-4">
                                           
                        </div>
                    </div><br/>

                    <div className="row">
                    <div className="col-12">
                   <NavTabs/>
                    </div>
                    </div>
                </Typography>
            </main>
        </div>
        );
    }
} 

Dashboard.propTypes = {

    classes: PropTypes.object.isRequired,
    
};

export default withStyles(styles)(Dashboard);