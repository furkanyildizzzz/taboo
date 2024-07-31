import { useRouter } from 'next/router';
import { useState } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking', // false or 'blocking'
  };
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'footer'])),
    },
  };
}
const NewGame = () => {
  const { query } = useRouter();
  const { newGameCode } = query;

  return <div>Game Code {newGameCode}</div>;
};
export default NewGame;
