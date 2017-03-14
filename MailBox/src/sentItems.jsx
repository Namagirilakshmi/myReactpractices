import React, { Component } from 'react';
import Items from './items.jsx';

class SentItems extends Component {
    render () {
        let sentItems = this.props.sentItems.map((item,i)=>{
            return (<Items item={item} key={i} />)
        });
        return (
            <div className="well col-md-10">
                {sentItems.length<=0?"No Records Found":sentItems}
            </div>
        )
    }
}

export default SentItems