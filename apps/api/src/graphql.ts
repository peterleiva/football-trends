import { ApolloServer } from '@apollo/server';
import { addMocksToSchema } from '@graphql-tools/mock';
import { makeExecutableSchema } from '@graphql-tools/schema';

const typeDefs = `
  type Query {
    hello: String
  }
`;

export default function createGraphQLHandler() {
  const server = new ApolloServer({
    schema: addMocksToSchema({
      schema: makeExecutableSchema({ typeDefs, resolvers: {} }),
    }),
  });

  return server;
}
