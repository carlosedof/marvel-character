import React from 'react';
import {Container} from "./styles";

const Loading = () => {
    return (
        <Container>
            <div className="lds-hourglass"/>
            <h1>be patient, loading...</h1>
        </Container>
    );
};

export default Loading;