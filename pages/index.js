// pages/index.js

import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import Header from '@/components/Header';
import DummyCard from '@/components/DummyCard';
import Card from '@/components/Card';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'footer'])),
    },
  };
}

const Button = styled.button`
  width: 100%;
  background-color: #3b82f6; /* Blue background */
  color: white;
  padding: 0.5rem;
  border-radius: 0.25rem;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #2563eb; /* Darker blue on hover */
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const Home = () => {
  const { t } = useTranslation('common');
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
      <Card />
      <DummyCard order={1} />
      <DummyCard order={2} />
      <DummyCard order={3} />
    </>
  );
};

export default Home;
