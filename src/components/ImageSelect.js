import React from 'react';
import styled from 'styled-components';

import imageLogo from '../image.png';
import VerticalCenteredDiv from './VerticalCenteredDiv';

const InvisibleInput = styled.input`
  display: none;
`;

const _handleImageChange = (e) => {
  e.preventDefault();

  let reader = new FileReader();
  let file = e.target.files[0];

  reader.onloadend = () => {
    console.log(reader.result);
  }

  reader.readAsDataURL(file)
}

const ImageSelect = ({author = {}, size = 32}) => {

  const Logo = styled.img`
    height: ${size}px;
    width: ${size}px;
  `;

  const Container = VerticalCenteredDiv.extend`
    display: inline-block;
    width: ${size}px;
  `;

  return (
    <Container>
      <label htmlFor="file-upload">
        <Logo src={imageLogo} width="32" height="32" />
        <InvisibleInput type="file" id="file-upload"
          onChange={(e)=>_handleImageChange(e)} />
      </label>
    </Container>
  );
};

export default ImageSelect;
