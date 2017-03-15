

import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.jsx';
import Demo from './demo.jsx';
import Example from './example.jsx';

import { Provider } from 'react-redux';
import store,{history} from './store';

import { Router, Route, browserHistory } from 'react-router';


ReactDOM.render(
    <Provider store={store}>
        <Router  history={history}>
            <Route path="/" component={App}>                
                <Route path="/demo" component={Demo} />
                <Route path="/example" component={Example} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);