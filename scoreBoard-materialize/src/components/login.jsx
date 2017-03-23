import React, { Component } from 'react';

import { Card, Row, Col, Input, Icon, Button } from 'react-materialize';

import { browserHistory } from 'react-router';

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            uname: "",
            pwd: ""            
        }
    }
    
    componentWillMount () {
        let user = window.sessionStorage.getItem("userLogged");
        if(user!==null){
            browserHistory.push('/score/1');
        }
    }
    
    handleChange(e, field) {
        this.setState({ [field]: e.target.value });
    }
    register() {
        browserHistory.push('/register');
    }
    login(){  
        let {uname,pwd} = this.state;
        this.props.actions.login({uname,pwd});
        browserHistory.push('/score/1');      
    }
    componentWillReceiveProps (nextProps) {
        if(nextProps.isUserValid){
            browserHistory.push('/score/1');
        }
    }
    
    render() {
        return (
            <div className="container">
                <Card>
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
                        <Col s={3} offset="s3">
                            <Button onClick={() => { this.login() }}>Login</Button>
                        </Col>
                        <Col s={3} >
                            <Button onClick={() => { this.register() }}>Register</Button>
                        </Col>
                    </Row>
                </Card>
            </div>
        )
    }
}

export default Login