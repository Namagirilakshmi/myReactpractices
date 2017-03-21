import React, { Component } from 'react';
import Demo from './demo.jsx';
import Example from './example.jsx';
import { Link } from 'react-router';

import * as actions from './actions/actions';
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';

class App extends Component {
    
    render () {
        return (
            <div>
                                       
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        demo:state.incrementReducer.demo,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions,dispatch)
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(App)