//path- src\components\PostHeader.jsx
/* eslint-disable react/prop-types */
import styled from "styled-components";
import AddImageButton from "./AddImageButton";
import LeftArrow from "../assets/left_arrow.svg";
import RightArrow from "../assets/right_arrow.svg";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  // background: #171717;
  // box-shadow: 0px 4.96px 12.4px 2.48px #00000040 inset;
  border-radius: 23px;
  margin: 17px 53px 0px 0px;
  padding: 6px;
`;
const CustomLabel = styled.div`
  width: 149px;
  height: 62px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #171717;
  box-shadow: 0px 4px 10px 2px #00000040 inset;
`;
const Container = styled.div`
  width: 55%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FabIcon = styled.img``;
const IconWrapper = styled.button`
  width: 45px;
  height: 45px;
  background: linear-gradient(139.14deg, #303439 12.4%, #161718 94.96%);
  box-shadow: 
    0px 3.26px 3.26px 0px #FFFFFF26 inset, /* First shadow */
    0px 0px 48.91px 0px #FFFFFF0D inset,   /* Second shadow */
    4px 5px 30px 5px #101213, 
    -5px -3px 30px -10px #96bee7;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  margin: 5px;
  &:focus {
    outline: none;
  }
}
`;

const BackWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: baseline;
`;
const PostHeader = ({setImages = () => {}}) => {
  return (
    <Wrapper>
      <CustomLabel>Gallery</CustomLabel>
      <Container>
        <AddImageButton text="+ ADD IMAGE" setImages={setImages}></AddImageButton>
        <BackWrapper>
          <IconWrapper>
            <FabIcon src={LeftArrow} />
          </IconWrapper>
          <IconWrapper>
            <FabIcon src={RightArrow} />
          </IconWrapper>
        </BackWrapper>
      </Container>
    </Wrapper>
  );
};

export default PostHeader;
