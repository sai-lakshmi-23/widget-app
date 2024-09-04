import styled from "styled-components";
import QuestionCircle from "../assets/question_circle.svg";
import Boxes from "../assets/Boxes.svg";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-start;
  align-items: baseline;
`;
const Container = styled.div`
  height: 50%;
  margin-top: 20px;
  margin-left: 12px;
`;
const ImageWrapper = styled.img``;
const LeftIcons = () => {
  return (
    <Wrapper>
      <Container>
        <ImageWrapper src={QuestionCircle} />
      </Container>
      <Container>
        <ImageWrapper src={Boxes} />
      </Container>
    </Wrapper>
  );
};

export default LeftIcons;
