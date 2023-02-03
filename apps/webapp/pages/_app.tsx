import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { ApiProvider } from '@football-trends/api-provider';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <ApiProvider>
      <Head>
        <title>Welcome to webapp!</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </ApiProvider>
  );
}

export default CustomApp;
