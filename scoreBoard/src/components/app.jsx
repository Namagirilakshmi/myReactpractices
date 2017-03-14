import React, { Component } from 'react';
import { Link } from 'react-router';

import * as actions from '../actions/action';
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';

import GetScore from './GetScore.jsx';
import Scoretable from './ScoreTable.jsx';


class App extends Component {
    constructor(props) {
        super(props)       
    }
    render() {  
        return (
            <div className="container">
                <GetScore actions={this.props.actions} />
                {this.props.location.pathname==="/viewScores"?null:<Link to="/viewScores">View scores</Link>}
                {this.props.children!=null?React.cloneElement(this.props.children,this.props):null}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        scores:state.addScoreReducer.scores,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions,dispatch)
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(App)