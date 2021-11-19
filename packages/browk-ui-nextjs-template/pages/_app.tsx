import '../styles/globals.css';
import type {AppProps} from 'next/app';
import {Theme} from '@browk-ui/core/theme';

function MyApp({Component, pageProps}: AppProps) {
  return (
    <Theme.Provider theme="default">
      <Component {...pageProps} />
    </Theme.Provider>
  );
}

export default MyApp;
