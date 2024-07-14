const { default: styled } = require('styled-components');

const InputStyles = styled.input`
  width: 100%;
  padding: 1rem;
  border: none;
  background-color: rgb(235, 235, 235);
  font-size: 2.2rem;
  border-radius: 2%;
  text-align: center;
  text-transform: uppercase;
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 12px;
  margin-bottom: 10px;
`;
const Input = ({ name, id, type, onChange, required, errors }) => {
  return (
    <>
      <InputStyles
        name={name}
        id={id}
        type={type}
        onChange={onChange}
        required={required}
      />
      {errors[name] && <ErrorMessage>{errors[name]}</ErrorMessage>}
    </>
  );
};
export default Input;
