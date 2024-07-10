import styled from 'styled-components';

const CardStyles = styled.div`
  width: 30rem;
  margin: 0px auto 0rem;
  padding: 2rem;
  border-radius: 2px;
  background-color: currentcolor;
  position: absolute;
  top: 66%;
  left: 50%;

  ${({ order }) =>
    order === 1 &&
    `
      color: rgb(238, 91, 44);
      z-index: -5;
      transform: translate(-50%, -50%) rotate(-20deg);
    `}

  ${({ order }) =>
    order === 2 &&
    `
      color: rgb(138, 201, 38);
      z-index: -10;
      transform: translate(-50%, -50%) rotate(16deg);
    `}

    ${({ order }) =>
    order === 3 &&
    `
      color: rgb(162, 59, 114);
      z-index: -15;
      transform: translate(-50%, -50%) rotate(-5deg);
    `}

  &:after {
    display: inline-block;
    content: '';
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background-color: lightgray;
    opacity: 0.5;
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
    }
  }
`;

const DummyCard = ({ order }) => {
  return (
    <CardStyles order={order}>
      <FirstDiv>Taboo!</FirstDiv>
      <SecondDiv>
        <ul>
          <li>Taboo!</li>
          <li>Taboo!</li>
          <li>Taboo!</li>
          <li>Taboo!</li>
        </ul>
      </SecondDiv>
    </CardStyles>
  );
};

export default DummyCard;
