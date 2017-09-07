import React from 'react';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';
import TextArea from 'react-autosize-textarea';

import EmojiPicker from './EmojiPicker';
import ImageSelect from './ImageSelect';

const TextView = styled.div`
  background-color: ${props => props.theme.TextView.backgroundColor};
  border-top: ${props => props.theme.TextView.borderTop};
  clear: right;
  display: block;
  height: calc(10% - 11px);
  padding: 5px;
  transition: background-color 1s;
  transition: border-top 1s;
  width: calc(100% - 10px);
`;

const TextInputWrapper = styled.div`
  display: inline-block;
  padding: 0 1%;
  text-align: center;
  vertical-align: middle;
  width: 78%;
`;

const TextSubmitWrapper = styled.div`
  display: inline-block;
  padding-top: 8px;
  padding-bottom: 8px;
  vertical-align: middle;
  width: 10%;
`;

const TextInputArea = styled(TextArea)`
  &::placeholder {
    color: ${props => props.theme.TextInputArea.placeholder.color};
    transition: color 1s;
  }
  &:focus {
    border: 1px solid ${props => props.theme.TextInputArea.focus.border};
    outline: none;
  }
  &:hover {
    border: ${props => props.theme.TextInputArea.hover.border};
  }
  border: ${props => props.theme.TextInputArea.border};
  border-radius: 15px;
  font-family: ${props => props.theme.ChatView.fontFamily};
  font-size: 14px;
  margin: 0;
  padding: 6px 10px;
  resize: none;
  transition: border 1s;
  width: calc(100% - 22px);
  max-width: calc(100% - 22px);
  min-width: calc(100% - 22px);
`;

const TextSubmitButton = styled.span`
  background-color: ${props => props.theme.TextSubmitButton.backgroundColor};
  border-radius: 16px;
  color: white;
  display: block;
  font-weight: bold;
  height: 25px;
  margin: 0 auto;
  padding-right: 2px;
  padding-top: 7px;
  text-align: center;
  width: 30px;

  &:hover {
    background-color: ${props => props.theme.TextSubmitButton.hover.backgroundColor};
    cursor: pointer;
  }

  transition: background-color 1s;
`;

const ImageSelectWrapper = styled.div`
  display: inline-block;
  padding-top: 8px;
  padding-bottom: 8px;
  text-align: center;
  vertical-align: middle;
  width: 10%;
`;

const EmojiPickerWrapper = styled.div`
  display: inline-block;
  left: -8%;
  position: relative;
  vertical-align: middle;
  width: 0;
`;

// TODO: Rename to 'MessageBar' or sth like that
// TODO: Refactor this into three(?) components

const createMessage = (user, content, type) =>
  ({ author: user, content, time: (new Date()).getTime(), type });

class TextInput extends React.Component {
	constructor (props) {
		super(props);
		this.state = { message: '' };
		this.handleChangeText = this.handleChangeText.bind(this);
		this.handleSendMessage = this.handleSendMessage.bind(this);
		this.handleKeyDown = this.handleKeyDown.bind(this);
		this.onPickEmoji = this.onPickEmoji.bind(this);
		this.onPickImage = this.onPickImage.bind(this);
	}

	handleSendMessage () {
		if (this.state.message !== '') {
			const message = createMessage(this.props.user, this.state.message, 'text');
			this.props.onAddMessage(message);
			this.setState({ message: '' });
		}
	}

	handleKeyDown (event) {
		if (event.keyCode === 13) {
			event.preventDefault();
			this.handleSendMessage();
		}
	}

	handleChangeText (evt) {
		this.setState({
			message: evt.target.value
		});
	}

	onPickEmoji (emoji) {
		this.setState({
			message: this.state.message + emoji
		})
	}

	onPickImage (imageUrl) {
		const { user } = this.props;
		const message = createMessage(user, { alt: `Image uploaded by ${user.name}`, url: imageUrl}, 'image');
		this.props.onAddMessage(message);
	}

	render () {
    const {user, onAddMessage} = this.props;
	const { message } = this.state;
    return (
      <TextView>
        <ImageSelectWrapper>
          <ImageSelect onSubmit={this.onPickImage} />
        </ImageSelectWrapper>
        <TextInputWrapper>
          <TextInputArea type="text"
            maxRows={3}
            innerRef={(comp) => { this.input = comp }}
            value={this.state.message}
            onChange={this.handleChangeText}
            onKeyDown={this.handleKeyDown}
            placeholder="type here"
          />
        </TextInputWrapper>
        <EmojiPickerWrapper>
          <EmojiPicker content={message} updateMessage={this.onPickEmoji}/>
        </EmojiPickerWrapper>
        <TextSubmitWrapper>
          <TextSubmitButton onClick={() => message !== '' && this.handleSendMessage()}>
            <FontAwesome name="paper-plane" />
          </TextSubmitButton>
        </TextSubmitWrapper>
      </TextView>
    );
  }
}

export default TextInput;
