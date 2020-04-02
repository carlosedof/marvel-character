import {gql} from "apollo-boost";

// marvelql backend swapped page and limit variable names, that's why they are swapped here aswell
export const GET_CHARACTERS = gql`
    query Character($page: Int!, $limit: Int!){
        charactersWithTotal(limit: $page, offset: $limit) {
            data {
                id
                name
                thumbnail
            },
            total
        },
    }`;

export const FILTER_CHARACTERS = gql`
    query Character($nameStartsWith: String!){
        characters(where: {nameStartsWith: $nameStartsWith}) {
            id,
            name,
            thumbnail
        }
    }`;

export const GET_CHARACTER_BY_ID = gql`
    query Character($id: Int!){
        getCharacter(where: {id: $id}) {
            id,
            name,
            description
            thumbnail
            series{
                name
            }
        }
    }`;

export const UPDATE_CHARACTER = gql`
  mutation updateCharacter(
    $id: ID!
    $name: String!
    $description: String
  ) {
    updateCharacter(
      id: $id
      name: $name
      description: $description
    ) @client {
      id
    }
  }
`;