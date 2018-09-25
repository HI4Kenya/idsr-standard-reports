import React from "react";
import {AppBar,Toolbar,Typography} from '@material-ui/core'
const TopBar = () => {
    return(
        <div className="row">
        <div className="col-12">
        <AppBar position="static">
            <Toolbar>
                <Typography variant="title" color="inherit">
                <h3>Integrated Disease Surveillance and Response</h3>
                </Typography>
            </Toolbar>
        </AppBar>
        </div>
        </div>
    )
}
export default TopBar;