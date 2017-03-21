import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, browserHistory, IndexRoute } from 'react-router';
import './style.css';

import { Provider } from 'react-redux';
import store,{history} from './store';

import MailBox from './mailBox.jsx';
import NewMail from './newMail.jsx';
import Inbox from './inbox.jsx';
import SentItems from './sentItems.jsx';

ReactDOM.render(
    <Provider store={store}>
        <Router  history={history}>
            <Route path="/" component={MailBox}>
                <IndexRoute component={Inbox} />
                <Route path="/newMail" component={NewMail}/>
                <Route path="/inbox" component={Inbox} />
                <Route path="/sentItems" component={SentItems} />                
            </Route>
        </Router>
    </Provider>
    ,
    document.getElementById('root')
);