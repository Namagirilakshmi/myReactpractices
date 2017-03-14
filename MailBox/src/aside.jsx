import React, { Component } from 'react'
import { Link } from 'react-router';


class Aside extends Component {
    render() {
        return (
            <ul className="nav well col-md-2">
                <li><Link to="/inbox">Inbox</Link></li>
                <li><Link to="/sentItems">Sent Items</Link></li>
            </ul>
        )
    }
}

export default Aside