import styled from 'styled-components';

const ButtonGroupStyles = styled.div`
  margin-top: 1.5rem;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const ButtonGroup = ({ children }) => {
  return <ButtonGroupStyles>{children}</ButtonGroupStyles>;
};
export default ButtonGroup;
