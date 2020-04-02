import ApolloClient from 'apollo-boost';

export default new ApolloClient({
    uri: 'https://marvelql.herokuapp.com/',
    resolvers: {
        Mutation: {
            updateCharacter: (_, variables, { cache }) => {
                const id = `Character:${variables.id}`;
                const data = { ...variables };
                cache.writeData({ id, data });
                return null;
            }
        },
    },
});
