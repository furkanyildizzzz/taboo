// pages/_app.js

import React from 'react';
import Layout from '../components/Layout';
import { appWithTranslation } from 'next-i18next';
import nextI18nextConfig from '@/next-i18next.config';
import LanguageSwitcher from '@/components/LanguageSwitcher';
//import '../styles/globals.css'; // Import global styles if you have any

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default appWithTranslation(MyApp, nextI18nextConfig);
