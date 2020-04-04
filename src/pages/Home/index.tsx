import React from 'react';
import {Container, PageSubtitle} from "./styles";
import CharacterList from "../CharacterList";

const Home = () => {

    return (
        <Container>
            <PageSubtitle>click on card to view details</PageSubtitle>
            <CharacterList/>
        </Container>
    );
};

export default Home;
