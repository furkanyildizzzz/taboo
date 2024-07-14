const { default: styled } = require('styled-components');

const FormStyles = styled.form`
  text-align: left;
  font-size: 2.2rem;
  font-family: Oswald, sans-serif;
  color: rgb(51, 51, 51);
`;
const Form = ({ children }) => {
  return <FormStyles>{children}</FormStyles>;
};
export default Form;
