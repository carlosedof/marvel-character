import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from "./pages/Home";
import CharacterDetail from "./pages/CharacterDetail";

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/detail/:id" component={CharacterDetail} />
        </Switch>
    );
}