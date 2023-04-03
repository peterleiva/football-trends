/* eslint-disable */
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Club = {
  __typename?: 'Club';
  id: Scalars['ID'];
  name: Scalars['String'];
};

/** Football attletes */
export type Player = {
  __typename?: 'Player';
  club?: Maybe<Club>;
  id: Scalars['ID'];
  knownAs: Scalars['String'];
  name: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  player: Player;
  players: Array<Player>;
};

export type QueryPlayerArgs = {
  id: Scalars['ID'];
};

export type GetPlayerQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

export type GetPlayerQuery = {
  __typename?: 'Query';
  player: { __typename?: 'Player'; id: string; name: string; knownAs: string };
};

export type GetPlayersQueryVariables = Exact<{ [key: string]: never }>;

export type GetPlayersQuery = {
  __typename?: 'Query';
  players: Array<{
    __typename?: 'Player';
    id: string;
    name: string;
    knownAs: string;
    club?: { __typename?: 'Club'; name: string } | null;
  }>;
};

export const GetPlayerDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetPlayer' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'player' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'id' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'knownAs' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetPlayerQuery, GetPlayerQueryVariables>;
export const GetPlayersDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetPlayers' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'players' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'knownAs' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'club' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetPlayersQuery, GetPlayersQueryVariables>;
