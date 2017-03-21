import React, { Component } from 'react';
import { Link } from 'react-router';

import { Card, Button, Row, Col } from 'react-materialize';

import * as actions from '../actions/action';
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';

import GetScore from './GetScore.jsx';
import Scoretable from './ScoreTable.jsx';


class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="container">
                <div>
                    <Card>
                        <Row>
                            <Col s={6}>
                                <GetScore actions={this.props.actions} />
                            </Col>
                            <Col s={6}>
                                {this.props.location.pathname === "/viewScores" ? null :
                                    <Link to="/viewScores">
                                        <Button waves='light' >View scores</Button>
                                    </Link>
                                }
                            </Col>
                        </Row>
                    </Card>
                </div>
                <div>                    
                    {this.props.children != null ? React.cloneElement(this.props.children, {actions:this.props.actions,scores:this.props.scores}) : null}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        scores: state.addScoreReducer.scores,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App)