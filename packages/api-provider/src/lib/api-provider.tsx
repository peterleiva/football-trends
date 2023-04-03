import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { useState } from 'react';

interface QueryClientProps {
  uri?: string;
  children?: React.ReactNode;
}

export default function ApiProvider({
  uri = 'http://localhost:3000/graphql',
  children,
}: QueryClientProps) {
  const [queryClient] = useState(
    () =>
      new ApolloClient({
        uri,
        cache: new InMemoryCache(),
      })
  );

  return <ApolloProvider client={queryClient}>{children}</ApolloProvider>;
}
