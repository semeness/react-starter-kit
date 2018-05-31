import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import App from 'containers/App/index';
import UserPageContainer from 'containers/UserPage/index';
import EditPage from 'containers/EditPage/index';

export default function Router() {
    return <BrowserRouter>
        <Switch>
            <Route exact path="/user-page/:id/edit" component={EditPage}/>
            <Route exact path="/user-page" component={UserPageContainer} />
            <Route exact path="/:module/:page/:type/:id" component={App} />
            <Route exact path="/:module/:page/:type" component={App} />
            <Route exact path="/:module/:page" component={App} />
            <Route exact path="/:module" component={App} />
            <Route component={App} />
        </Switch>
    </BrowserRouter>;
}
