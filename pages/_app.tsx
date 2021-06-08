import React from 'react';
import '../styles/main.scss';
import 'normalize.css';

function MyApp({ Component, pageProps }: any): React.ReactElement {
  return <Component {...pageProps} />;
}

export default MyApp;
