import React, { Component } from 'react';
import ChatBox from './chatBox.jsx';
import  '../style.css';
class ToggleChatBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            toggleChat: 0,
            chatBox: []
        }
    }
    toggleChat() {
        let {chatBox} = this.state;
        let chatName = this.refs.chatName.value;
        this.setState({
            toggleChat: this.state.toggleChat + 1,
            chatBox: [...chatBox, this.state.toggleChat + 1],
            chatName
        });
        this.refs.chatName.value = "";
    }
    render() {
        let {chatBox, chatName} = this.state;
        var chatBoxes = chatBox.map((data, index) => {
            return <ChatBox key={index} chatName={chatName} />;
        });
        return (
            <div>
                <div className="well">
                    <div className="form-inline">
                        <div className="form-group">
                            <input type="text" className="form-control" ref="chatName" placeholder="Enter Name to chat" /><span className="glyphicon glyphicon-plus btn btn-default" onClick={() => { this.toggleChat() }}></span>
                        </div>
                    </div>
                </div>

                {this.state.chatBox.length > 0 ? <div className="row">
                    {chatBoxes}
                </div> : null}

            </div>
        )
    }
}

export default ToggleChatBox