import React, { Component } from 'react'

import { Link } from 'react-router';
import NewMail from './newMail.jsx';
import Aside from './aside.jsx';

import * as actions from './actions/actions';
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';


class MailBox extends Component {
    constructor (props) {
        super(props);
        this.state={
            sentItems:props.sentItems
        }        
    }     
    render() {
        console.log(this.props.children);
        return (
            <div className="container">
                <div className="row well">
                    <Link to="/newMail">New Mail</Link>
                </div>
                <div className="row">
                    <Aside />
                    {React.cloneElement(this.props.children,this.props)}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        sentItems:state.sendMailReducer.sentItems,
        inbox:state.sendMailReducer.inbox               
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions,dispatch)
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(MailBox)