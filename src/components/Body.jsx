/* eslint-disable react/prop-types */

import styled from "styled-components";

const Wrapper = styled.div`
  overflow-y: scroll;
  height: 100%;
  margin-right: 13px;
  margin-left: 5px;
  font-size: 20px;
  font-weight: 400;
  line-height: 25.2px;
  color: #969696;
  padding-right: 50px;
  text-align: left;

    /* WebKit Browsers (Chrome, Safari, Edge) */
  &::-webkit-scrollbar {
    width: 8px; /* Width of the vertical scrollbar */
  }

  &::-webkit-scrollbar-track 63
  }

  &::-webkit-scrollbar-thumb {
    background: linear-gradient(177.32deg, #888989 5.6%, #4A4E54 93.28%);
    border-radius: 10px;
    // width: 8px;
    height: 64px;
    border-radius: 8px;
    // box-shadow: 4px 4px 4.9px 0px #00000040;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #555; /* Color when the scrollbar thumb is hovered */
  }

`;
const Body = ({ bodyContent = "This is Body Content" }) => {
  return <Wrapper>{bodyContent}</Wrapper>;
};

export default Body;
