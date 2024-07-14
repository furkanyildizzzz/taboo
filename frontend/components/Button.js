const { default: styled } = require('styled-components');

const ButtonStyles = styled.button`
  width: 47%;
  padding: 0.6rem 0rem;
  border: none;
  border-radius: 2px;
  font-size: 2.3rem;
  font-family: Oswald, sans-serif;
  text-transform: uppercase;

  ${({ buttontype }) =>
    buttontype === 'regular' &&
    `
    color: rgb(25, 130, 196);
      background-color: rgb(247, 249, 249);
    `}

  ${({ buttontype }) =>
    buttontype === 'success' &&
    `
      color: rgb(247, 249, 249);
      background-color: rgb(138, 201, 38);
    `}
`;

const Button = ({ text, buttontype, onClick }) => {
  return (
    <ButtonStyles type="button" buttontype={buttontype} onClick={onClick}>
      {text}
    </ButtonStyles>
  );
};

export default Button;
