import React, { Component } from 'react';
import { browserHistory } from 'react-router'

class NewMail extends Component {
    sendMail(e){
        e.preventDefault();
        let payload ={
            to:this.refs.to.value,
            sub:this.refs.sub.value,
            body:this.refs.body.value
        };
        let {actions} = this.props;
        actions.sendMail(payload);
        browserHistory.push('/inbox');
    }
    render () {
        return (
            <div className="well col-md-10">
                <form onSubmit={(e)=>{this.sendMail(e)}}>
                    <div className="form-group">
                        <label htmlFor="to">To:</label>
                        <input type="text" ref="to" className="form-control" placeholder="Enter recepient" id="to" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="sub">Subject:</label>
                        <input type="text" ref="sub" className="form-control" placeholder="Enter subject" id="sub" />
                    </div>
                    <div className="form-group">                        
                        <textarea className="form-control" ref="body"></textarea>
                    </div>
                    <input type="submit" value="Send" className="btn btn-primary" />
                </form>
            </div>
        )
    }
}

export default NewMail