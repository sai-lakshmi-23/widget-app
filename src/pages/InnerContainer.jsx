/* eslint-disable react/prop-types */
import styled from "styled-components";

const OuterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50%;
`;
const Container = styled.div`
  box-shadow: 5.67px 5.67px 3.78px 0px #00000066;
  background: #363c43;
  border-radius: 18.89px;
  height: 90%;
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-bottom: 24px;
`;
const Line = styled.div`
  box-shadow: 0px 4px 4px 0px #00000054;
  background: linear-gradient(
      180deg,
      rgba(40, 40, 40, 0.1) 0%,
      rgba(248, 248, 248, 0.1) 100%
    ),
    linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05));
  width: 80%;
  height: 4px;

  border-radius: 2.46px 0px 0px 0px;
`;

const HeaderContainer = styled.div`
  height: 35%;
  width: 100%;
`;
const BodyContainer = styled.div`
  height: 55%;
  width: 100%;
`;
const LeftIconsContainer = styled.div`
  width: 10%;
`;
const Wrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-start;
  align-items: baseline;
  margin-left: 12px;
`;
const InnerContainer = ({ header, body, leftIcons }) => {
  return (
    <OuterContainer>
      <Container>
        <LeftIconsContainer>{leftIcons}</LeftIconsContainer>
        <Wrapper>
          <HeaderContainer>{header}</HeaderContainer>
          <BodyContainer>{body}</BodyContainer>
        </Wrapper>
      </Container>
      <Line />
    </OuterContainer>
  );
};

export default InnerContainer;
