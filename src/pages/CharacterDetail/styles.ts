import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 3rem auto;
    padding: 3rem;
    width: 80%;
    background: #4b569269;
    border-radius: 10px;
    box-shadow: 2px 2px 15px #191919;
`;

export const Title = styled.div`
    font-family: montserrat-semibold;
    font-size: medium;
    text-align: center;
    margin-top: 0.5rem;
    color: white;
    text-transform: uppercase;
`;

export const Description = styled.div`
    margin-top: 10px;
    font-family: montserrat-light;
    font-size: small;
    text-align: center;
    color: white;
`;

export const SeriesContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: montserrat-light;
    padding: 10px 0;
    label {
        margin-top: 10px;
        color: white;
    }
`;

export const LabelStyled = styled.label`
    align-items: center;
    font-family: montserrat-semibold;
`;



export const Thumbnail = styled.img`
    width: 100%;
    max-width: 300px;
    border-radius: 8px;
    margin: 0.5rem auto;
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin: 3rem 0 1rem;
`;

export const Button = styled.button`
    padding: 1rem;
    background: #982e26;
    border: none;
    border-radius: 8px;
    color: white;
    font-family: montserrat-bold;
    text-transform: uppercase;
    font-size: medium;
    width: 200px;
    box-shadow: 3px 3px 7px #2d2d2d;
    transition: all 0.2s ease;
    :focus {
        outline: 0;
    }
    :hover {
        opacity: 0.9;
        cursor: pointer;
    }
    :active {
        opacity: 0.7;
        box-shadow: 1px 1px 7px #2d2d2d;
    }
`;