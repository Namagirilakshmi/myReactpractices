import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';

import { Button, Row, Col } from 'react-materialize';

import * as actions from '../actions/action';
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';

import './style.css';

class App extends Component {
    constructor(props) {
        super(props);
    }
    logout() {
        this.props.actions.logout();
        browserHistory.push("/");
    }    
    render() {
        let user = window.sessionStorage.getItem("userLogged");
        var divStyle = {
            backgroundImage: 'url(../images/bgg.jpg)',
            backgroundRepeat: 'repeat',
            height: '100vh',
            backgroundSize: 'cover'
        };
        return (
            <div style={divStyle}>
                <header className="container">
                    {
                        this.props.location.pathname == "/" || this.props.location.pathname == "/register" ? null :
                            <Row>
                                <Col s={6}>
                                    <h5 className="white-text">Hi {window.sessionStorage.getItem("userLogged")}</h5>
                                </Col>
                                <Col s={2} offset="s4">
                                    <Button className="logout" onClick={() => { this.logout() }}>Logout</Button>
                                </Col>
                            </Row>
                    }
                </header>
                <div className="container">
                    {this.props.children != null ? React.cloneElement(this.props.children, this.props) : null}
                </div>
            </div >
        )
    }
}

function mapStateToProps(state) {
    return {
        scores: state.addScoreReducer.scores,
        credentials: state.addScoreReducer.credentials,
        currentUser: state.addScoreReducer.currentUser,
        isUserValid: state.addScoreReducer.isUserValid,
        userExist: state.addScoreReducer.userExist
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App)