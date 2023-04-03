import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'http://localhost:3000/graphql',
  documents: ['./apps/**/*.tsx'],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    'packages/types/src/graphql.ts': {
      plugins: [
        'typescript',
        'typescript-resolvers',
        'typescript-mongodb',
        'typescript-document-nodes',
      ],
    },
    'packages/types/src/client/': {
      preset: 'client',
      plugins: [],
      config: {
        useTypeImports: true,
      },
    },
  },
};

export default config;
