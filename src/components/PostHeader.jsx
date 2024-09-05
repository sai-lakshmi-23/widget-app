//path- src\components\PostHeader.jsx
/* eslint-disable react/prop-types */
import styled from "styled-components";
import AddImageButton from "./AddImageButton";
import LeftArrow from "../assets/left_arrow.svg";
import RightArrow from "../assets/right_arrow.svg";
import Plus from "../assets/plus.svg";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  // background: #171717;
  // box-shadow: 0px 4.96px 12.4px 2.48px #00000040 inset;
  border-radius: 23px;
  margin: 17px 53px 0px 0px;
  padding: 6px;
  /* Styles for widths less than 1260px */
  @media (max-width: 1260px) {
      flex-wrap: wrap; /* Allow wrapping of buttons */
      justify-content: flex-start; /* Align buttons to the start */
    
    > div {
      flex: 1 1 calc(50% - 10px); /* Two buttons per row, accounting for gap */
    }
  }

  /* Styles for widths less than 800px */
  @media (max-width: 800px) {
    > div {
      flex: 1 1 100%; /* One button per row */
    }
  }
`;
const CustomLabel = styled.div`
  width: 149px;
  height: 62px;
  font-family: "Poppins";
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #171717;
  box-shadow: 0px 4px 10px 2px #00000040 inset;
`;
const Container = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FabIcon = styled.img``;
const PlusIcon = styled.img`
  font-size: 12px;
  margin-right: 5px;
`;
const IconWrapper = styled.button`
  width: 45px;
  height: 45px;
  background: linear-gradient(139.14deg, #303439 12.4%, #161718 94.96%);
  // box-shadow: 
  //   0px 3.26px 3.26px 0px #FFFFFF26 inset, /* First shadow */
  //   0px 0px 48.91px 0px #FFFFFF0D inset,   /* Second shadow */
  //   4px 5px 30px 5px #101213, 
  //   -5px -3px 30px -10px #96bee7;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  margin: 5px;
  box-shadow: 19px 20px 30px 3px #101213, -5px -3px 30px -10px #96BEE7;

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
        <AddImageButton text="ADD IMAGE" plusIcon={<PlusIcon src={Plus} />} setImages={setImages}></AddImageButton>
        <BackWrapper>
          <IconWrapper>
            <FabIcon src={RightArrow} />
          </IconWrapper>
          <IconWrapper>
            <FabIcon src={LeftArrow} />
          </IconWrapper>
        </BackWrapper>
      </Container>
    </Wrapper>
  );
};

export default PostHeader;
