import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { ApiProvider } from '@football-trends/api-provider';
import { QueryClient, QueryClientProvider } from 'react-query';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to webapp!</title>
      </Head>
      <main className="app">
        <ApiProvider>
          <Component {...pageProps} />
        </ApiProvider>
      </main>
    </>
  );
}

export default CustomApp;
