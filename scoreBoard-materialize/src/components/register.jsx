import React, { Component } from 'react';

import { Card, Row, Col, Input, Icon, Button } from 'react-materialize';
import {browserHistory} from 'react-router';


class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            uname: "",
            pwd:"",
            rePwd:"",
            match:false
        }
    }

    register() {
        let {uname, pwd,match} = this.state;
        if(match){
            this.props.actions.register({ uname, pwd });
            this.setState({uname:"",pwd:"",rePwd:""})
            browserHistory.push("/");
        }else{
            console.log("password didn't matched");
        }        
    }
    handleChange(e, field) {
        this.setState({[field]: e.target.value});
        if(this.state.pwd!=this.state.rePwd){
            this.setState({match:true})
        }
        else{
            this.setState({match:true})
        }
    }    
    
    render() { 
        return (
            <div>
                <Card>
                    <Row>
                        <Col s={10} offset="s2">
                            <h5 className="black-text">Registration</h5>
                        </Col>
                    </Row>
                    <Row>
                        <Col s={10} offset="s2">
                            <Input s={9} label="Enter User Name" onChange={(e, uname) => { this.handleChange(e, "uname") }} validate><Icon>perm_identity</Icon></Input>
                        </Col>
                    </Row>
                    <Row>
                        <Col s={10} offset="s2">
                            <Input s={9} label="Enter Password" onChange={(e, pwd) => { this.handleChange(e, "pwd") }} validate type='password'><Icon>lock</Icon></Input>
                        </Col>
                    </Row>
                    <Row>
                        <Col s={10} offset="s2">
                            <Input s={9} label="Re-Enter Password" onChange={(e, rePwd) => { this.handleChange(e, "rePwd") }} validate type='password'><Icon>lock</Icon></Input>
                        </Col>
                    </Row>
                     <Row>
                        <Col s={3} offset="s3">
                            <Button onClick={() => { this.register() }}>Register</Button>
                        </Col>
                    </Row>
                </Card>
            </div>
        )
    }
}

export default Register