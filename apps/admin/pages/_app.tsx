import { CacheProvider, EmotionCache } from '@emotion/react';
import { ApiProvider } from '@football-trends/api-provider';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { Layout } from '../src/components/layout';
import createEmotionCache from '../src/utils/createEmotionCache';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './styles.css';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const mdTheme = createTheme();

  return (
    <CacheProvider value={emotionCache}>
      <ApiProvider uri={process.env.NEXT_PUBLIC_API}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider theme={mdTheme}>
          <CssBaseline />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </ApiProvider>
    </CacheProvider>
  );
}
