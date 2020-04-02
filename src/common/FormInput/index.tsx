import React from 'react';
import InputText from "../InputText";
import {useFormikContext} from "formik";

const FormInput = (props: any) => {
    const { handleChange, setFieldValue } = useFormikContext();

    const clearFn = () => {
        setFieldValue(props.name, '');
    };

    return (
        <InputText
            {...props}
            onChange={handleChange}
            clearFn={clearFn}
        />
    );
};

export default FormInput;