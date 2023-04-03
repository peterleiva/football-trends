import { ApiProvider } from '@football-trends/api-provider';
import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <ApiProvider uri={process.env.NEXT_PUBLIC_API}>
      <Head>
        <title>Football Trends</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </ApiProvider>
  );
}

export default CustomApp;
