import React from 'react';
import styled from 'styled-components';
import produce from 'immer';
import Lightbox from 'react-image-lightbox';

import GenericBubble from './GenericBubble';

const Image = styled.img`
  display: inline-block;
  max-width: 220px;
  opacity: 0;
  text-shadow: 1px 1px 0px rgba(255, 255, 255, 0.5);
  border: ${props => props.theme.ImageBubble.border}
`;

class ImageBubbleComponent extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      fullscreen: false
    };
  }

  render () {
    return (
      <div>
        <Image alt={this.props.content.alt}
          src={this.props.content.url}
          onClick={() => this.setState(produce(draft => { draft.fullscreen = true; }))} />
        { this.state.fullscreen && <Lightbox
          mainSrc={this.props.content.url}
          onCloseRequest={() => this.setState(produce(draft => { draft.fullscreen = false; }))}
          enableZoom={false}
        />
        }
      </div>
    );
  }
}

const ImageBubble = GenericBubble(
  ImageBubbleComponent,
  ({content}) => (`
    background-image: url(${content.url});
    background-size: cover;

    > span {
      color: white;
      opacity: 0.7;
    }
    `
  )
);

export default ImageBubble;
