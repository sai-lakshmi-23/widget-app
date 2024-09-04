/* eslint-disable react/prop-types */
import { useRef } from "react";
import styled from "styled-components";

// Styled component for the custom button
const CustomButton = styled.button`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 131.32px;
  font-size: 12px;
  height: 46px;
  color: #FFFFFF;
  border-radius: 104px;
  box-shadow: 
    0px 3.26px 3.26px 0px #FFFFFF26 inset, /* First shadow */
    0px 0px 48.91px 0px #FFFFFF0D inset,   /* Second shadow */
    9px 10px 7.1px 0px #00000066,          /* Third shadow */
    -0.5px -0.5px 6.9px 0px #FFFFFF40;     /* Fourth shadow */
  background: rgb(63, 69, 76);
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

// Component for selecting and storing images
const AddImageButton = ({ text = "Add Image", setImages }) => {
  const fileInputRef = useRef(null); // Reference to the hidden file input

  // Function to handle file selection
  const handleImageUpload = (event) => {
    const files = event.target.files;

    // Convert the FileList to an array and store the files in the state
    const newImages = Array.from(files).map((file) => URL.createObjectURL(file)); // Create a URL for each file
    setImages((prevImages) => [...prevImages, ...newImages]);
  };

  // Function to trigger the hidden file input click
  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div>
      {/* Custom Button that triggers file input */}
      <CustomButton onClick={handleButtonClick}>{text}</CustomButton>

      {/* Hidden file input for selecting images */}
      <input
        type="file"
        multiple
        accept="image/*"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleImageUpload}
      />
    </div>
  );
};

export default AddImageButton;
