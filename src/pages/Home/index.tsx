import React from 'react';
import {Container, PageSubtitle, PageTitle} from "./styles";
import CharacterList from "../CharacterList";

const Home = () => {

    return (
        <Container>
            <PageTitle>Frontend Challenge - Marvel Characters</PageTitle>
            <PageSubtitle>click on card to view details</PageSubtitle>
            <CharacterList/>
        </Container>
    );
};

export default Home;