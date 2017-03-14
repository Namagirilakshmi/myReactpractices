import React, { Component } from 'react';
import Example from './example.jsx';

class Demo extends Component {
    
    
    render () {
        
        return (
            <div>
                {this.props.demo}
                <button onClick={()=>{this.props.actions.incrementDemo(2)}} > Click </button>
                
            </div>
        )
    }
}

export default Demo