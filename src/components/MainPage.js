import 'bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap/dist/js/bootstrap.bundle.min';
//import $ from 'jquery';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
//import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { List, ListItem, ListItemIcon, ListItemText, Collapse, CardHeader } from '@material-ui/core';
import StarBorder from '@material-ui/icons/StarBorder';
// import Grid from '@material-ui/core';
import { Card, CardBody, Row, Col, Button } from 'reactstrap';
import './App.css';
import ReportingRate from './ReportingRate';
import Report from './Report';
import NavTabs from './NavTabs';

const drawerWidth = 240;

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
                <List>
                    {/* <Collapse> */}
                    <List component="div" disablePadding>
                        <ListItem button>
                            <ListItemIcon>
                                <StarBorder />
                            </ListItemIcon>
                            <ListItemText primary="Weekly" />
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>
                                <StarBorder />
                            </ListItemIcon>
                            <ListItemText primary="Quarterly" />
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>
                                <StarBorder />
                            </ListItemIcon>
                            <ListItemText primary="Semi-Anually" />
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>
                                <StarBorder />
                            </ListItemIcon>
                            <ListItemText primary="Anually" />
                        </ListItem>
                    </List>
                    {/* </Collapse> */}
                </List>
                <Divider />
                {/* <List>{otherMailFolderListItems}</List> */}
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







// import React from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import Drawer from '@material-ui/core/Drawer';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import List from '@material-ui/core/List';
// import Typography from '@material-ui/core/Typography';
// import IconButton from '@material-ui/core/IconButton';
// import Hidden from '@material-ui/core/Hidden';
// import Divider from '@material-ui/core/Divider';
// //import MenuIcon from '@material-ui/icons/Menu';
// //import { mailFolderListItems, otherMailFolderListItems } from './tileData';

// const drawerWidth = 240;

// const styles = theme => ({
//   root: {
//     flexGrow: 1,
//     height: '100%',
//     zIndex: 1,
//     overflow: 'hidden',
//     position: 'relative',
//     display: 'flex',
//     width: '100%',
//   },
//   appBar: {
//     position: 'absolute',
//     marginLeft: drawerWidth,
//     [theme.breakpoints.up('md')]: {
//       width: `calc(100% - ${drawerWidth}px)`,
//     },
//   },
//   navIconHide: {
//     [theme.breakpoints.up('md')]: {
//       display: 'none',
//     },
//   },
//   toolbar: theme.mixins.toolbar,
//   drawerPaper: {
//     width: drawerWidth,
//     [theme.breakpoints.up('md')]: {
//       position: 'relative',
//     },
//   },
//   content: {
//     flexGrow: 1,
//     backgroundColor: theme.palette.background.default,
//     padding: theme.spacing.unit * 3,
//   },
// });

// class MainPage extends React.Component {
//   state = {
//     mobileOpen: false,
//   };

//   handleDrawerToggle = () => {
//     this.setState(state => ({ mobileOpen: !state.mobileOpen }));
//   };

//   render() {
//     const { classes, theme } = this.props;

//     const drawer = (
//       <div>
//         <div className={classes.toolbar} />
//         <Divider />
//         {/* <List>{mailFolderListItems}</List> */}
//         <Divider />
//         {/* <List>{otherMailFolderListItems}</List> */}
//       </div>
//     );

//     return (
//       <div className={classes.root}>
//         <AppBar className={classes.appBar}>
//           <Toolbar>
//             <IconButton
//               color="inherit"
//               aria-label="Open drawer"
//               onClick={this.handleDrawerToggle}
//               className={classes.navIconHide}
//             >
//               {/* <MenuIcon /> */}
//             </IconButton>
//             <Typography variant="title" color="inherit" noWrap>
//               Responsive drawer
//             </Typography>
//           </Toolbar>
//         </AppBar>
//         <Hidden mdUp>
//           <Drawer
//             variant="temporary"
//             anchor={theme.direction === 'rtl' ? 'right' : 'left'}
//             open={this.state.mobileOpen}
//             onClose={this.handleDrawerToggle}
//             classes={{
//               paper: classes.drawerPaper,
//             }}
//             ModalProps={{
//               keepMounted: true, // Better open performance on mobile.
//             }}
//           >
//             {drawer}
//           </Drawer>
//         </Hidden>
//         <Hidden smDown implementation="css">
//           <Drawer
//             variant="permanent"
//             open
//             classes={{
//               paper: classes.drawerPaper,
//             }}
//           >
//             {drawer}
//           </Drawer>
//         </Hidden>
//         <main className={classes.content}>
//           <div className={classes.toolbar} />
//           <Typography noWrap>
//           gdgdgdgdgdgdgdgdggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg
//           </Typography>
//         </main>
//       </div>
//     );
//   }
// }

// MainPage.propTypes = {
//   classes: PropTypes.object.isRequired,
//   theme: PropTypes.object.isRequired,
// };

// export default withStyles(styles, { withTheme: true })(MainPage);
