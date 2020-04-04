import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;

export const CharacterListContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

export const CharacterCard = styled.div`
    box-shadow: 2px 2px 10px black;
    background: #4b569269;
    padding: 0.5rem 0.5rem 3rem;
    margin: 0.9rem;
    color: white;
    width: 165px;
    height: 215px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 8px;
    text-align: center;
    transition: all 0.3s ease;
    :hover {
        cursor: pointer;
        transform: scale(1.05);
    }
`;

export const Thumbnail = styled.img`
    width: 100%;
    border-radius: 8px;
    margin: 0 auto;
    max-height: 185px;
`;

export const Title = styled.div`
    font-family: montserrat-semibold;
    font-size: medium;
    text-align: center;
    margin-top: 0.5rem;
`;

export const NoResultsStyled = styled.h3`
    color: white;
    font-family: montserrat-semibold;
`;
