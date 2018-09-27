import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {Drawer,AppBar,Toolbar,Typography} from '@material-ui/core/';
import { Card, CardBody, } from 'reactstrap';
import './App.css';
import NavTabs from './NavTabs';
//import SideBar from './SideBar';

// const drawerWidth = 240;
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

function ClippedDrawer(props) {
    const { classes } = props;

    return (
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
            </Drawer>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Typography >
                    <div className="row">
                        <div className="col-12">
                        <Card>
                            <CardBody>
                            <NavTabs/>
                            </CardBody>
                        </Card>                    
                        </div>
                    </div>

                </Typography>
            </main>
        </div>
    );
}

ClippedDrawer.propTypes = {

    classes: PropTypes.object.isRequired,
    
};

export default withStyles(styles)(ClippedDrawer);