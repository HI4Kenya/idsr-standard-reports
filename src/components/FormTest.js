import React from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';
//import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {Select, FormControl, MenuItem, Checkbox,ListItemText,Input} from '@material-ui/core';


// const styles = theme => ({
//     root: {
//       display: 'flex',
//       flexWrap: 'wrap',
//     },
//     formControl: {
//       margin: theme.spacing.unit,
//       minWidth: 120,
//       maxWidth: 300,
//     }
//   });

// function setCode(e)
// {
//     var code = document.getElementById('disease').value;
//     document.getElementById('disease_specific').value = code;
// }
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };
const names = [
    'Oliver Hansen',
    'Van Henry',
    
  ];

export default class FormTest extends React.Component {
    state = {
        name: [],
      };
    
      handleChange = event => {
        this.setState({ name: event.target.value });
      };
    render() {
         const { classes } = this.props;
        return (
            <Grid>
                <Row>
                    <Col md={6}>
                    <FormControl className="form-control">
                    {/* className={styles.formControl} */}
                        <Select
                        multiple
                        value={this.state.name}
                        onChange={this.handleChange}
                        input={<Input id="select-multiple" />}
                        MenuProps={MenuProps}
                        >
                        {names.map(name => (
                        <MenuItem key={name} value={name}>
                            <Checkbox checked={this.state.name.indexOf(name) > -1} />
                            <ListItemText primary={name} />
                        </MenuItem>
                        ))}
                        </Select>
                    </FormControl>
                        {/* <Form>
                            <FormGroup>
                                <Row>
                                    <Col md={5}>
                                    
                                    <select class="selectpicker form-control input-place"  name="select_option" id="disease" onChange="setCode(this)" required>
                                    <option value="" disabled>Select Disease</option>
                                    <option value="44">Measles</option>
                                    <option value="55">Rubella</option>
                                    <option value="33">Influenza</option>
                                    <option value="22">Malaria</option>
                                    <option value="11">Maternal Deaths</option>
                                    </select>
                                    </Col>
                                    <Col md={2}>
                                    <Button>Generate Chart</Button>
                                    </Col>
                                    <Col md={5}></Col>
                                </Row>
                                
                            </FormGroup>
                            
                        </Form> */}
                    </Col>
                    <Col  md={2}>
                    <Button>Generate Report</Button>
                    </Col>
                </Row>
            </Grid>
        );
    }
}
//export default FormTest;
