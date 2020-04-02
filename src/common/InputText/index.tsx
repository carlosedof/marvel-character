import React from 'react';
import {ClearField, Container, InputStyled} from "./styles";

type Props = {
    value: any,
    onChange: any,
    clearFn: any,
    placeholder: string,
    name?: string
}
const InputText = (props: Props) => {
    return (
        <Container>
            <InputStyled
                {...props}
            />
            <ClearField onClick={() => props.clearFn('')}/>
        </Container>
    );
};

export default InputText;