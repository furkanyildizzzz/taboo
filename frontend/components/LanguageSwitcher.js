import React from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

const Switcher = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 1rem;
`;

const Button = styled.button`
  margin-left: 0.5rem;
  padding: 0.5rem 1rem;
  border: none;
  cursor: pointer;
  background-color: #f3f4f6; /* Light gray background */
  color: #333;
  border-radius: 4px;
  font-size: 1rem;
  transition: background-color 0.2s;

  &:hover {
    background-color: #e2e8f0; /* Darker gray on hover */
  }

  &.active {
    background-color: #3b82f6; /* Blue background for active button */
    color: white;
  }
`;

const LanguageSwitcher = () => {
  const router = useRouter();
  const { locale, locales } = router;
  const { pathname, asPath, query } = router;

  const changeLanguage = (newLocale) => {
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };

  return (
    <Switcher>
      {locales.map((lang) => (
        <Button
          key={lang}
          onClick={() => changeLanguage(lang)}
          className={locale === lang ? 'active' : ''}
        >
          {lang.toUpperCase()}
        </Button>
      ))}
    </Switcher>
  );
};

export default LanguageSwitcher;
