/* eslint-disable react/prop-types */
// src/components/AddImageButton.jsx
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addImages } from '../slices/imagesSlice';
import styled from 'styled-components';

const CustomButton = styled.button`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 95%;
  font-size: 12px;
  height: 46px;
  color: #FFFFFF;
  border-radius: 104px;
  box-shadow: 
    0px 3.26px 3.26px 0px #FFFFFF26 inset,
    0px 0px 48.91px 0px #FFFFFF0D inset,
    9px 10px 7.1px 0px #00000066,
    -0.5px -0.5px 6.9px 0px #FFFFFF40;
  background: rgb(63, 69, 76);
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

const AddImageButton = ({ text = 'Add Image' }) => {
  const fileInputRef = useRef(null);
  const dispatch = useDispatch();

  const handleImageUpload = (event) => {
    const files = event.target.files;
    const newImages = Array.from(files).map((file) => URL.createObjectURL(file));
    dispatch(addImages(newImages));
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div>
      <CustomButton onClick={handleButtonClick}>{text}</CustomButton>
      <input
        type="file"
        multiple
        accept="image/*"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleImageUpload}
      />
    </div>
  );
};

export default AddImageButton;
