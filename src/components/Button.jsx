//path- src\components\Button.jsx
/* eslint-disable react/prop-types */
import styled from "styled-components";

const CustomButton = styled.button`
  background: ${(props) => (props?.active ? "rgb(40, 41, 47)" : "#171717")};
  color: ${(props) => (props?.active ? "#FFFFFF" : "#A3ADB2")};
  ${(props) =>
    props?.active &&
    "box-shadow: 17px 9px 24px 17px rgb(15, 16, 17), 0 2px 4px rgb(15, 16, 17)"};
  font-size: 18px;
  font-weight: 500;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 49px;
  font-family: "Poppins";
  border-radius: 16px;
  &:focus {
    outline: none;
  }
`;
const Button = ({ active = false, text = "", onClick = () => {} }) => {
  return (
    <CustomButton active={active} onClick={onClick}>
      {text}
    </CustomButton>
  );
};

export default Button;
