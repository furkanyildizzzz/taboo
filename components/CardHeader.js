import styled from 'styled-components';

const CardHeaderStyles = styled.div`
  background-color: rgb(247, 249, 249);
  padding: 1.2rem;
  text-align: center;
  border-radius: 2px;
  font-family: Oswald, sans-serif;
  font-size: 4rem;
  color: inherit;
  font-weight: 400;
  text-transform: uppercase;
`;

const CardHeader = ({ children }) => {
  return <CardHeaderStyles>{children}</CardHeaderStyles>;
};

export default CardHeader;
