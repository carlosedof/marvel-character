import React, {useEffect, useState} from 'react';
import {Character} from "../../models/Character";
import {CharacterCard, CharacterListContainer, Container, NoResultsStyled, Thumbnail, Title} from "./styles";
import {withRouter} from "react-router-dom";
import InputText from "../../common/InputText";
import {useLazyQuery} from "@apollo/react-hooks";
import Loading from "../../common/Loading";
import Pagination from "react-js-pagination";
import {PAGE_LIMIT} from "../../constants";
import {FILTER_CHARACTERS, GET_CHARACTERS} from "../../services/queries";

const CharacterList = (props: any) => {
    const [getCharacters, findAll] = useLazyQuery(GET_CHARACTERS);
    const [characters, setCharacters] = useState<Character[]>([]);
    const [totalCached, setTotalCached] = useState<number>(0);
    const [characterFiltered, setCharacterFiltered] = useState<Character[]>([]);
    const [searchParam, setSearchParam] = useState<string>('');
    const [getCharacterByName, findByName] = useLazyQuery(FILTER_CHARACTERS);
    const [activePage, setActivePage] = useState(0);
    const [total, setTotal] = useState(0);

    const handleChange = (e: any) => {
        setSearchParam(e.target.value);
    };

    const clearFn = () => {
        setSearchParam('');
    };

    const handlePageChange = (pageNumber: number) => {
        setActivePage(pageNumber);
    };

    useEffect(() => {
        getCharacters({
            variables: {
                page: ((activePage === 0 ? 0 : activePage - 1) * PAGE_LIMIT),
                limit: PAGE_LIMIT
            }
        });
    }, [activePage, getCharacters]);

    useEffect(() => {
        if (findAll.data && findAll.data.charactersWithTotal && findAll.data.charactersWithTotal.data) {
            const { data } = findAll.data.charactersWithTotal;
            const { total } = findAll.data.charactersWithTotal;
            setTotal(total);
            setTotalCached(total);
            setCharacters(data);
            setCharacterFiltered(data);
        }
    }, [findAll.data, setTotal, setCharacters, setCharacterFiltered, setTotalCached]);

    useEffect( () => {
        if (findByName.data && findByName.data.characters) {
            setCharacterFiltered(findByName.data.characters);
            setTotal(findByName.data.characters.length);
        } else {
            setCharacterFiltered(characters);
            setTotal(totalCached)
        }
    }, [findByName.data, characters, setTotal, totalCached]);

    useEffect( () => {
        if (searchParam.trim()) {
            getCharacterByName({ variables: { nameStartsWith: searchParam } })
        } else {
            setCharacterFiltered(characters);
            setTotal(totalCached);
        }
    }, [searchParam, characters, getCharacterByName, setCharacterFiltered, totalCached]);

    return (
        <Container>
            { (findByName.loading || findAll.loading) && <Loading/> }
            <InputText
                data-testid="form-field"
                placeholder="inform character name to search"
                value={searchParam}
                onChange={handleChange}
                clearFn={clearFn}
            />
            <CharacterListContainer>
                {   characterFiltered?.map( (character, i) =>
                    <CharacterCard
                        data-testid={i}
                        key={i}
                        onClick={() => props.history.push(`/detail/${character.id}`)}>
                        <Thumbnail src={character.thumbnail}/>
                        <Title>{character.name}</Title>
                    </CharacterCard>
                    )
                }
                {
                    (!findByName.loading && !findAll.loading && characterFiltered?.length < 1) &&
                    <NoResultsStyled>No results!</NoResultsStyled>
                }
            </CharacterListContainer>
            {
                (!findByName.loading && !findAll.loading && characterFiltered?.length > 0) &&
                <Pagination
                    activePage={activePage}
                    itemsCountPerPage={20}
                    totalItemsCount={total}
                    pageRangeDisplayed={5}
                    onChange={handlePageChange}
                />
            }
        </Container>
    );
};

export default withRouter(CharacterList);
