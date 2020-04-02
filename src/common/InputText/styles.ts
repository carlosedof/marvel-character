import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 420px;
    margin: 0 auto;
`;

export const InputStyled = styled.input`
    background: transparent;
    padding: 8px;
    border: none;
    border-bottom: 1px solid gray;
    font-size: medium;
    font-family: montserrat-light;
    width: 400px;
    color: #fff;
    text-align: center;
    margin-bottom: 30px;
    :focus {
        outline: none;
    }
`;

export const ClearField = styled.span`
    position: absolute;
    right: 10px;
    top: 5px;
    color: white;
    font-size: large;
    font-family: sans-serif;
    font-weight: 400;
    ::before {
      content: 'x';
    }
    :hover {
        cursor: pointer;
        opacity: 0.9;
    }
`;