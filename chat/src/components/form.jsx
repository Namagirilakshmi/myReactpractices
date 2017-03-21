import React, { Component } from 'react'

class Form extends Component {
    render () {
        return (
            <div>
                <form onSubmit={}>
                    <div className="form-group">
                        <label for="name">Name</label>
                        <input type="text" className="form-control" id="name" placeholder="Enter your Name" />
                    </div>
                    <div className="form-group">
                        <label for="email">Email</label>
                        <input type="text" className="form-control" id="email" placeholder="Enter your Email ID" />
                    </div>
                    <button type="submit" class="btn btn-default">Submit</button>
                </form>
            </div>
        )
    }
}

export default Form