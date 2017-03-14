import React, { Component } from 'react';
import { Form, Row, Col, Icon, Input, Button, Card } from 'react-materialize';


class GetScore extends Component { 
    constructor (props) {
        super(props)
        this.state = {
            name:"",
            mark:0
        }
    }    
    handleChange(e){
        let targetEle=e.target.id;
        let targetval=e.target.value;
        if(targetEle==="name"){
            this.setState({
                name:targetval
            });
        }
        else if(targetEle==="mark"){
            this.setState({
                mark:targetval
            });
        }
    }
    addScore(){
        this.props.actions.addScore(this.state);
        this.setState({
            name:"",
            mark:0
        });
        document.getElementById("name").value="";
        document.getElementById("mark").value="";
    }
    render() {
        return (
            <Card>
                <Row>
                    <Col s={4}>
                        <Input label="Name" id="name" onChange={(e)=>{this.handleChange(e)}} validate><Icon>account_circle</Icon></Input>
                    </Col>
                    <Col s={4}>
                        <Input label="Mark" type="number" id="mark" onChange={(e)=>{this.handleChange(e)}} validate type='tel'><Icon>subject</Icon></Input>
                    </Col>
                    <Col s={4}>
                        <Button waves='light' onClick={()=>{this.addScore()}}>Submit</Button>
                    </Col>
                </Row>
            </Card>
        )
    }
}

export default GetScore