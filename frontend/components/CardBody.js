import Link from 'next/link';
import styled from 'styled-components';

const CardBodyStyles = styled.div`
  background-color: rgb(247, 249, 249);
  padding: 1.5rem;
  text-align: center;
  border-radius: 2px;
  font-size: 4rem;
  margin-top: 1.5rem;
  ul {
    list-style-type: none;
    li {
      font-family: Oswald, sans-serif;
      font-size: 2.7rem;
      position: relative;
      padding-bottom: 1.5rem;
      a {
        color: currentcolor;
        text-decoration: none;
        transform: translateY(0px);
      }
    }
  }
`;

const CardBody = ({ children }) => {
  return <CardBodyStyles>{children}</CardBodyStyles>;
};

export default CardBody;
