import React from 'react'
import { render } from '@testing-library/react'
import {ApolloProvider} from "@apollo/react-hooks";
import api from "../services/api";
import {Router} from "react-router-dom";
import history from "../services/history";


const AllTheProviders = ({ children }: any) => {
    return (
        <ApolloProvider client={api}>
            <Router history={history}>
                {children}
            </Router>
        </ApolloProvider>
    )
}

const customRender = (ui: any, options: any) =>
    render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }