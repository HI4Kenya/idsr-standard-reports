import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

function setCode(e)
{
    var code = document.getElementById('disease').value;
    document.getElementById('disease_specific').value = code;
}

export default class FormTest extends React.Component {
    render() {
        return (
            <Grid>
                <Row>
                    <Col md={12}>
                        <Form>
                            <FormGroup>
                                <Row>
                                    <Col md={5}>
                                    <select class="selectpicker form-control input-place"  name="select_option" id="disease" onChange="setCode(this)" required>
                                    {/* multiple data-live-search="true" */}
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
                            
                        </Form>
                    </Col>
                </Row>
            </Grid>
        );
    }
}
//export default FormTest;
