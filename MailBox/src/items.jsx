import React, { Component } from 'react'

class Items extends Component {
    render () {
        return (
            <div className="alert alert-success" role="alert">
                <p><strong>{this.props.item.to}</strong></p>
                <p><strong>{this.props.item.from}</strong></p>
                <h5>{this.props.item.sub}</h5>
                <hr />
                <div className="body">
                    <p>{this.props.item.body}</p>
                </div>
            </div>
        )
    }
}

export default Items