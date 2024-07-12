const { default: styled } = require('styled-components');

const DivStyles = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  -webkit-box-align: center;
`;

const LabelStyles = styled.label`
  font-size: 1.6rem;
  display: inline-block;
`;

const SelectStyles = styled.select`
  padding: 1rem;
  width: 100%;
  margin: 0.8rem 0rem 1rem 0px;
  background-color: rgb(235 235 235);
  font-size: 1.5rem;
  border: none;
`;

const OptionStyles = styled.option``;

const SelectInput = ({
  name,
  labelText,
  tabindex,
  onChange,
  options,
  defaultValue,
}) => {
  return (
    <>
      <DivStyles>
        <LabelStyles htmlFor={name}>{labelText}</LabelStyles>
      </DivStyles>
      <SelectStyles
        name={name}
        tabIndex={tabindex}
        onChange={onChange}
        value={defaultValue}
      >
        {options.map(({ value, text, selected }, index) => {
          return (
            <OptionStyles key={index} value={value} selected={selected}>
              {text}
            </OptionStyles>
          );
        })}
      </SelectStyles>
    </>
  );
};
export default SelectInput;
