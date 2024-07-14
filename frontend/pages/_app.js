// pages/_app.js

import React from 'react';
import Layout from '../components/Layout';
import { appWithTranslation } from 'next-i18next';
import nextI18nextConfig from '@/next-i18next.config';
import '../styles/globals.css'; // Import global styles if you have any
import { StyleSheetManager } from 'styled-components';

function MyApp({ Component, pageProps }) {
  return (
    <StyleSheetManager stylisPlugins={[]}>
      <div id="root">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </StyleSheetManager>
  );
}

export default appWithTranslation(MyApp, nextI18nextConfig);
