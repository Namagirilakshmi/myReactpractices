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
                {/*{this.props.demo>=10?null:<Demo demoVal={this.props.demo} incDemoVal={(a)=>{this.props.actions.incrementDemo(a)}} />}*/}
                {/*{this.props.demo}    <button onClick={()=>{this.props.actions.incrementDemo(2)}}>Click</button>*/}
                <ul>
                    <li><Link to="/demo">Demo</Link></li>
                    <li><Link to="/example">Example</Link></li>
                </ul> 
                {this.props.children!=null?React.cloneElement(this.props.children,this.props):null}                              
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