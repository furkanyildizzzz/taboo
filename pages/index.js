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
  const [gameCode, setGameCode] = useState('');

  const router = useRouter();

  const createGame = () => {
    // Generate a unique game code (example: randomly generated code)
    const newGameCode = generateGameCode();
    // setGameCode(newGameCode);
    // Navigate to the new game page with the generated code
    //router.push(`/game/${newGameCode}`);
    router.push(`/game/create`);
  };

  const generateGameCode = () => {
    // Implement your logic to generate a unique game code here
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const codeLength = 6;
    let code = '';
    for (let i = 0; i < codeLength; i++) {
      code += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return code;
  };

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
