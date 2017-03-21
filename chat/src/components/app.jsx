import React, { Component } from 'react';

import ChatBox from './chatBox.jsx';
import ToggleChatBox from './toggleChatBox.jsx';
class App extends Component {
    constructor (props) {
        super(props)        
    }
    
    
    render () {
        return (
            <div className="container">
                <ToggleChatBox />
            </div>
        )
    }
}

export default App