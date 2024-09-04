import styled from "styled-components";
import InnerContainer from "./InnerContainer";
import Header from "../components/Header";
import Body from "../components/Body";
import LeftIcons from "../components/LeftIcons";
import { bioData } from "../utilities/constants";
import { useState } from "react";
import PostHeader from "../components/PostHeader";
import Gallery from "../components/Gallery";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  & > div:first-of-type {
    margin-bottom: 14px;
  }
`;
const WidgetContainer = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [images, setImages] = useState([]); // State to hold uploaded images
  return (
    <Wrapper>
      <InnerContainer header={<Header activeTab={activeTab} setActiveTab={setActiveTab}  />} body={<Body bodyContent={bioData[activeTab]} />} leftIcons={<LeftIcons />}  />
      <InnerContainer header={<PostHeader setImages={setImages} />} body={<Body bodyContent={<Gallery images={images} />} />} leftIcons={<LeftIcons />}  />
      {/* <InnerContainer header={<Header />} body={<Body bodyContent={bodyContainer} />} leftIcons={<LeftIcons />}   /> */}
    </Wrapper>
  );
};

export default WidgetContainer;
