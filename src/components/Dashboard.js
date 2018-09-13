import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Add from '@material-ui/icons/Add';
import Edit from '@material-ui/icons/Edit';
import './Dashboard.css';
import { Grid } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import "./App";

const Cards = props => (
  <ul className="list-group">
    {
      
      props.items.map((item, index) => <li className="list-group-item" key={index}>{item}</li>)
    }
  </ul>
);


class Dashboard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false,
            title:'',
            // description: '',
            items: [],
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleOpen = () => {
        this.setState({ open: true });
      };
    
    handleClose = () => {
        this.setState({ open: false });
      };

    handleChange(event) {
        this.setState({
          [event.target .name] : event.target.value
        });
      };

    handleSubmit(event){
        // alert('Atitle was submitted: ' + this.state.value);
        
        event.preventDefault();
        console.log("Title: " + this.state.title);

        this.setState({
          title: '',
          // description: '',
          open: false,
          items: [...this.state.items, this.state.title]
        });  
        
        
        console.log("Item List: " + this.state.items);
    }

    render(){
        return(
            <div className="container" >
            <div className="row">
            <Grid container direction="row" alignItems="center" spacing={8}>
            <Grid item xs={4}>
            <Card className='card'>
        <CardHeader
          title="Weekly Bulletin"
          subheader="Weekly Epidemiological Bulletin"
        />
        <CardContent>
          <Typography component="p">
            This impressive paella is a perfect party dish and a fun meal to cook together with your
            guests. Add 1 cup of frozen peas along with the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions className='actions' disableActionSpacing>
          <IconButton aria-label="Edit bulletin" className= "edit">
            <Edit />
          </IconButton>
        </CardActions>

      </Card>
      </Grid>
      <br/>

      <Grid item xs={4}>
        <Card className='card'>
        <CardHeader
          title="Create Custom Form"/>

        <CardContent>
          <Typography component="p">
            This impressive paella is a perfect party dish and a fun meal to cook together with your
            guests. Add 1 cup of frozen peas along with the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions className='actions' disableActionSpacing>
          <IconButton className= "add" onClick= {this.handleOpen}>
            <Add />
          </IconButton>
        </CardActions>
        
        <div className="modal">
        <Modal
          open={this.state.open}
          onClose={this.handleClose.bind(this)}>

          <div className="paper">

          <form name="form" onSubmit={this.handleSubmit.bind(this)} noValidate  preventdefault="true">
          <h3>CREATE NEW REPORT</h3>
              <label>
                  Title:
              </label>
              <br/>
              <input type="text" name="title" value={this.state.title} onChange={this.handleChange} required ref={(a) => this._inputElement = a} />
              <br/>
              <label>
                  Description:
              </label>
              <br/>
              <input type="text" name="description" value={this.state.description} onChange={this.handleChange} ref={(b) => this._inputElement = b} />
              <br/>
              <input type="submit" value="CREATE"  />
          </form>
          </div>
        </Modal>
        </div>

      </Card>
      </Grid>
            </Grid>
            </div>

            <Routes/>
            </div>
        );
    }
}
export default Dashboard;