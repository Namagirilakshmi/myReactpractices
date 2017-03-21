import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import { Provider } from 'react-redux';
import store, { history } from './store';

import App from './components/app.jsx';
import ScoreTable from './components/ScoreTable.jsx';

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <Route path="/viewScores" component={ScoreTable} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);