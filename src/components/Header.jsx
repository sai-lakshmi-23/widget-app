//path- src\components\Header.jsx
/* eslint-disable react/prop-types */
import styled from "styled-components"
import Button from "./Button"

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 5px;
  background: #171717;
  border-radius: 23px;
  margin: 17px 53px 0px 0px;
  padding: 6px;

/* Styles for widths less than 1260px */
@media (max-width: 1260px) {
    flex-wrap: wrap; /* Allow wrapping of buttons */
    justify-content: flex-start; /* Align buttons to the start */
  
  > button {
    flex: 1 1 calc(50% - 10px); /* Two buttons per row, accounting for gap */
  }
}

/* Styles for widths less than 800px */
@media (max-width: 800px) {
  > button {
    flex: 1 1 100%; /* One button per row */
  }
}
`

const Header = ({ activeTab = 0, setActiveTab = () => {}}) => {
  return (
    <ButtonWrapper>
      <Button active={activeTab === 0} text={"About Me"} onClick={() => setActiveTab(0)} />
      <Button active={activeTab === 1} text={"Experiences"} onClick={() => setActiveTab(1)} />
      <Button active={activeTab === 2} text={"Recommended"} onClick={() => setActiveTab(2)} />
    </ButtonWrapper>
  )
}

export default Header
