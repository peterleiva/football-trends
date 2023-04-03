import { ApolloServer } from '@apollo/server';
import { addMocksToSchema } from '@graphql-tools/mock';
import { makeExecutableSchema } from '@graphql-tools/schema';

const typeDefs = `
  """
  Football attletes
  """
  type Player {
    id: ID!
    name: String!
    knownAs: String!
    club: Club
  }

  type Club {
    id: ID!
    name: String!
  }

  type Query {
    players: [Player!]!
    player(id: ID!): Player!
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
