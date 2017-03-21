import React, { Component } from 'react'

class ChatBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            chatItems: [],
            chatName:props.chatName
        }
    }   
    
    sendMessage(e) {
        let msg = this.refs.msg.value;
        e.preventDefault();
        if (e.which == 13 || e.type == "submit") {
            if (msg.trim().length>0) {
                let {chatItems} = this.state;
                this.setState({
                    chatItems: [...chatItems, msg]
                });
                this.refs.msg.value = "";
            }
        }
    }
    render() {
        let chatItems = this.state.chatItems.map((msg, i) => {
            return (
                <p key={i}>Me:{msg}</p>
            );
        })
        return (
            <div className="col-md-3 panel panel-primary">
                <div className="panel-heading">
                    <h3 className="panel-title">Chat With {this.state.chatName}</h3>
                </div>
                <div className="panel-body">
                    <div className="texts">
                        {chatItems}
                    </div>
                    <form className="form-inline" onSubmit={(e) => { this.sendMessage(e) }}>
                        <div className="form-group">
                            <textarea ref="msg" id="msg" className="form-control" onKeyUp={(e) => { this.sendMessage(e) }} ></textarea>
                        </div>
                        <button type="submit" className="btn btn-default">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default ChatBox