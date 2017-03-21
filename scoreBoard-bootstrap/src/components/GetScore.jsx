import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel, Row, Col, Button } from 'react-bootstrap';


class GetScore extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            mark: 0
        }
    }
    handleChange(e, field) {
        let targetval = e.target.value;
        if (field === "name") {
            this.setState({
                name: targetval
            });
        }
        else if (field === "mark") {
            this.setState({
                mark: targetval
            });
        }
    }
    addScore(e) {
        e.preventDefault();
        this.props.actions.addScore(this.state);
        this.setState({
            name: "",
            mark: 0
        });
        document.getElementById("name").value = "";
        document.getElementById("mark").value = "";
    }
    render() {
        return (
            <Row>
                {/*<Col s={4}>
                        <Input label="Name" id="name" onChange={(e)=>{this.handleChange(e)}} validate><Icon>account_circle</Icon></Input>
                    </Col>
                    <Col s={4}>
                        <Input label="Mark" type="number" id="mark" onChange={(e)=>{this.handleChange(e)}} validate type='tel'><Icon>subject</Icon></Input>
                    </Col>
                    <Col s={4}>
                        <Button waves='light' onClick={()=>{this.addScore()}}>Submit</Button>
                    </Col>*/}
                <Col xs={6}>
                    <form>
                        <FormGroup controlId="name">
                            <ControlLabel>Name</ControlLabel>
                            <FormControl
                                type="text"
                                value={this.state.name}
                                placeholder="Enter text"
                                onChange={(e, field) => { this.handleChange(e, "name") }}
                            />
                        </FormGroup>
                        <FormGroup controlId="mark">
                            <ControlLabel>Mark</ControlLabel>
                            <FormControl
                                type="text"
                                value={this.state.mark}
                                placeholder="Enter Mark"
                                onChange={(e, field) => { this.handleChange(e, "mark") }}
                            />
                        </FormGroup>
                        <Button type="submit" onClick={(e)=>{this.addScore(e)}}>
                            Submit
                        </Button>
                    </form>
                </Col>
            </Row>
        )
    }
}

export default GetScore