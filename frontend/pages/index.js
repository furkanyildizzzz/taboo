// pages/index.js

import React, { useState } from 'react';
import { useRouter } from 'next/router';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import Header from '@/components/Header';
import MainMenu from '@/components/MainMenu';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'footer'])),
    },
  };
}

const Home = () => {
  return (
    <>
      <LanguageSwitcher />
      <Header title={'welcome'}>
        The team game that’s all about what you{' '}
        <span className="sc-AxheI eHEBtw">say,</span> and what you{' '}
        <span className="sc-AxheI eHEBtw">don’t!</span>
      </Header>
      <MainMenu />
    </>
  );
};

export default Home;
