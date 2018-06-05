import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import App from 'containers/App/index';
import DataLoadContainer from 'containers/DataLoad/index';
import {getUserList} from 'redux/actions/user-list';


export default function Router() {
    return <BrowserRouter>
        <Switch>
            <Route path="/user-page" component={DataLoadContainer}/>
            <Route exact path="/:module/:page/:type/:id" component={App} />
            <Route exact path="/:module/:page/:type" component={App} />
            <Route exact path="/:module/:page" component={App} />
            <Route exact path="/:module" component={App} />
            <Route component={App} />
        </Switch>
    </BrowserRouter>;
}


