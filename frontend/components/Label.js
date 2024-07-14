const { default: styled } = require('styled-components');

const LabelStyles = styled.label`
  font-size: 1.6rem;
  display: inline-block;
  width: 100%;
  margin-bottom: 0.8rem;
  text-align: center;
  font-weight: 500;
`;

const Label = ({ name, text }) => {
  return <LabelStyles htmlFor={name}>{text}</LabelStyles>;
};
export default Label;
