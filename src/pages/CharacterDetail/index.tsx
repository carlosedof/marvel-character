import React, {useEffect, useState} from 'react';
import {Character} from "../../models/Character";
import {
    Button,
    ButtonContainer,
    Container,
    Description,
    LabelStyled,
    SeriesContainer,
    Thumbnail,
    Title
} from "./styles";
import {Link, withRouter} from "react-router-dom";
import {useLazyQuery, useMutation} from "@apollo/react-hooks";
import Loading from "../../common/Loading";
import {Formik} from "formik";
import FormInput from "../../common/FormInput";
import {GET_CHARACTER_BY_ID, UPDATE_CHARACTER} from "../../services/queries";

const initialValues = {
    name: '',
    description: ''
};

const CharacterDetail = (props: any) => {
    const id = props.match.params.id;
    const [getCharacters, { loading, data }] = useLazyQuery(GET_CHARACTER_BY_ID);
    const [submit] = useMutation(UPDATE_CHARACTER);
    const [editing, setEditing] = useState<boolean>(false);
    const [character, setCharacter] = useState<Character>(initialValues);

    const handleSubmit = (values: any) => {
        submit({
            variables: {
                id: values.id,
                name: values.name,
                description: values.description
            } })
            .then( () => props.history.push("/"));
    };

    useEffect(() => {
        if (data) {
            setCharacter(data.getCharacter);
        }
    }, [data, setCharacter]);

    useEffect(() => {
        getCharacters({ variables: { id: parseInt(id) } });
    }, [getCharacters, id]);

    return (
        <Container>
            { loading && <Loading/> }
            <Thumbnail src={character?.thumbnail}/>
            <Formik
                initialValues={character}
                onSubmit={handleSubmit}
                enableReinitialize={true}>
                {({handleSubmit, values}) => (
                    <>
                        {
                            !editing ?
                                <>
                                    <Title data-testid="label-title">{values?.name}</Title>
                                    <Description>{values?.description ? values?.description : 'No description available.'}</Description>
                                </>
                                :
                                <>
                                    <FormInput
                                        data-testid="form-name"
                                        value={values?.name}
                                        name="name"
                                        placeholder="Name"/>
                                    <FormInput
                                        data-testid="form-description"
                                        value={values?.description}
                                        name="description"
                                        placeholder="Description"/>
                                </>
                        }
                        <SeriesContainer>
                            <LabelStyled>series list:</LabelStyled>
                            { character?.series?.map( (serie: any, i: number) =>
                                <label key={i}>{serie.name}</label>
                            )
                            }
                        </SeriesContainer>
                        <ButtonContainer>
                            <Link to={'/'}>
                                <Button data-testid="btn-back">Back</Button>
                            </Link>
                            {
                                editing ?
                                    <Button
                                        data-testid="btn-save"
                                        onClick={() => handleSubmit()}>{ 'Save' }</Button>
                                    :
                                    <Button
                                        data-testid="btn-edit"
                                        onClick={ () => setEditing( true)}>{ 'Edit' }</Button>
                            }
                        </ButtonContainer>
                    </>
                )}
            </Formik>
        </Container>

    );
};

export default withRouter(CharacterDetail);
