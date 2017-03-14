import React, { Component } from 'react'
import Items from './items.jsx';

class Inbox extends Component {
    componentDidMount () {
        let {actions} = this.props;
        actions.receiveMail({});
    }
    
    render () {
        let inbox = this.props.inbox.map((item,i)=>{
            return (<Items item={item} key={i} />)
        });        
        return (
            <div className="well col-md-10">
                {inbox.length<=0?"No Records Found":inbox}
            </div>
        )
    }
}

export default Inbox