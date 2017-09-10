import React from 'react';
import styled from 'styled-components';

const ImageLogo = styled.span`
  color: ${props => props.theme.ImageSelectLogo.color};
  font-size: 24px;

  line-height: 16px;

  &:hover {
    color: ${props => props.theme.ImageSelectLogo.hover.color};
    cursor: pointer;
  }

  transition: color 1s;
`;

const InvisibleInput = styled.input`
  display: none;
`;

const handleImageChange = (e, callback) => {
  e.preventDefault();

  let reader = new FileReader();
  let file = e.target.files[0];

  reader.onloadend = () => {
    callback(reader.result);
  }

  reader.readAsDataURL(file);
}

const ImageSelect = ({author = {}, onSubmit}) => {

  return (
    <label htmlFor="file-upload">
      <ImageLogo name="image">o</ImageLogo>
      <InvisibleInput type="file" id="file-upload"
        onChange={(e)=> handleImageChange(e, onSubmit)} />
    </label>
  );
};

export default ImageSelect;
