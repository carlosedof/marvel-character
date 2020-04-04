import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from "./pages/Home";
import CharacterDetail from "./pages/CharacterDetail";
import styled from "styled-components";

export const PageTitle = styled.h3`
    color: white;
    font-family: montserrat-bold;
    text-align: center;
    font-size: x-large;
    margin: 2% 0;
`;

export default function Routes() {
    return (
        <>
            <PageTitle>Frontend Challenge - Marvel Characters</PageTitle>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/detail/:id" component={CharacterDetail} />
            </Switch>
        </>
    );
}
