import Link from 'next/link';
import styled from 'styled-components';

const CardStyles = styled.div`
  width: 30rem;
  margin: 0px auto;
  padding: 2rem;
  border-radius: 2px;
  position: relative;
  background-color: currentcolor;
  color: rgb(25, 130, 196);

  ::before {
    z-index: -1;
    position: absolute;
    content: '';
    bottom: 1.2rem;
    left: 0.5rem;
    width: 50%;
    top: 80%;
    max-width: 300px;
    background: rgb(119, 119, 119);
    box-shadow: rgba(0, 0, 0, 0.4) 0px 1.5rem 1rem;
    transform: rotate(-3deg);
  }
`;

const FirstDiv = styled.div`
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

const SecondDiv = styled.div`
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

const Card = () => {
  return (
    <CardStyles>
      <FirstDiv>Menu</FirstDiv>
      <SecondDiv>
        <ul>
          <li>
            <Link href={`/game/create`}>Create New Game</Link>
          </li>
          <li>
            <Link href={`/game/join`}>Join Game</Link>
          </li>
          <li>
            <Link href={`/howToPlay`}>How To Play</Link>
          </li>
          <li>
            <Link href={`/card/submit`}>Submit a Card</Link>
          </li>
        </ul>
      </SecondDiv>
    </CardStyles>
  );
};

export default Card;
