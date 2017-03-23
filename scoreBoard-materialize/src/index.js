import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory,IndexRoute } from 'react-router';

import { Provider } from 'react-redux';
import store, { history } from './store';

import App from './components/app.jsx';
import ScoreTable from './components/ScoreTable.jsx';
import Login from './components/login.jsx';
import Register from './components/register.jsx';
import Score from './components/score.jsx';

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={Login} />
                <Route path="/score/:viewScore" component={Score} />
                <Route path="/register" component={Register} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);