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
  // box-shadow: 0px 4.96px 12.4px 2.48px #00000040 inset;
  border-radius: 23px;
  margin: 17px 53px 0px 0px;
  padding: 6px;
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
