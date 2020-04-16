import React from "react";
import {Router, Route, Switch} from "react-router-dom";
import {asyncComponent} from "./components/AsyncComponent";
import { createBrowserHistory} from "history";
const AsyncHome = asyncComponent(import("./page/Home"));
const AsyncAbout = asyncComponent(import("./page/About"));
const AsyncDKMS = asyncComponent(import("./page/DKMS"));
const AsyncCustom = asyncComponent(import("./page/Custom"));
const AsyncNotFound = asyncComponent(import("./page/NotFound"));

const history = createBrowserHistory();


export default () =>
    <Router history={history}>
        <Switch>
            <Route
                exact
                component={AsyncHome}
                path='/'
            />
            <Route
                exact
                component={AsyncAbout}
                path='/about'
            />

            <Route
                exact
                component={AsyncDKMS}
                path='/solution/dkms'
            />

            <Route
                exact
                component={AsyncCustom}
                path='/solution/custom'
            />

            <Route component={AsyncNotFound}/>
        </Switch>
    </Router>
