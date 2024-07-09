import { useTranslation } from 'next-i18next';
import styled from 'styled-components';

const HeaderStyles = styled.header`
  margin-top: 3rem;
  margin-bottom: 5rem;
  h1 {
    background: none;
    font-family: Oswald, sans-serif;
    color: rgb(25, 130, 196);
    text-transform: uppercase;
    font-weight: 300;
    font-size: 7rem;
    text-align: center;
    margin: 1rem 0px;
  }

  h3 {
    font-size: 2.4rem;
    text-align: center;
    width: 30rem;
    margin: 0px auto;
    font-weight: 300;
    color: rgb(117, 117, 117);
    background-color: rgba(247, 249, 249, 0.5);
    line-height: 1.3;
  }
`;

const Header = ({ title, children }) => {
  const { t } = useTranslation('common');
  return (
    <HeaderStyles>
      <h1>{t('welcome')}</h1>
      <h3>{children}</h3>
    </HeaderStyles>
  );
};
export default Header;
