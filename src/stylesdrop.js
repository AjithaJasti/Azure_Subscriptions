import styled from "styled-components";

export const DropdownWrapper = styled.form`
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
`;

export const StyledSelect = styled.select`
  position: absolute;
  left: 30.21%;
  right: 30.15%;
  top: 44.85%;
  bottom: 48.88%;
  background: #e2e2e2;
  border-radius: 9px;
`;

export const StyledOption = styled.option`
  color: ${(props) => (props.selected ? "rgb(192, 192, 192)" : "black")};
`;

export const StyledLabel = styled.label`
  margin: 4px 2px;
`;

export const StyledButton = styled.input`
  position: absolute;
  left: 45%;
  top: 70%;
  background-color: rgb(192, 192, 192);
  border: none;
  color: rgb(0, 0, 0);
  padding: 20px 40px;
  text-align: center;
  text-decoration: none;
  border-radius: 22px;
  display: inline-block;
  font-size: 20px;
  margin: 4px 2px;
  cursor: pointer;
`;
