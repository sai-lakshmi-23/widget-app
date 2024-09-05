//path- src\components\Gallery.jsx
/* eslint-disable react/prop-types */
import styled from "styled-components";
import Image from "../assets/dummy_image.svg";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  img {
    width: calc(33.33% - 10px); /* Calculate width for 3 images in a row */
    margin-bottom: 10px;
  }
  @media (max-width: 1024px) {
    /* Adjust breakpoint as needed */
    img {
      width: calc(50% - 10px); /* Adjust width for 2 images in a row */
    }
  }

  @media (max-width: 768px) {
    /* Adjust breakpoint as needed */
    img {
      width: 100%; /* Adjust width for 2 images in a row */
    }
  }
`;

const ImageWrapper = styled.img`
  border-radius: 24px;
`
const Gallery = ({ images = [] }) => {
  return (
    <Wrapper>
      <ImageWrapper src={Image} />
      <ImageWrapper src={Image} />
      <ImageWrapper src={Image} />
      {images.map((image, index) => (
        <ImageWrapper key={index} src={image} alt={`Uploaded ${index + 1}`} />
      ))}
    </Wrapper>
  );
};

export default Gallery;
