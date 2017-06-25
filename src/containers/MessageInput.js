import { connect } from 'react-redux';

import {
  updateMessage,
  sendMessage
} from '../actions/messages';
import TextInput from '../components/TextInput';

const createMessage = (user, content, type) =>
  ({ author: user, content, time: (new Date()).getTime(), type })

const mapStateToProps = state => {
  return {
    content: state.messages.current.content || '',
    user: state.messages.user
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onUpdateMessage: (text) => {
      const message = createMessage(ownProps.user, text, 'text');
      dispatch(updateMessage(message));
    },
    onSubmitText: (text) => {
      const message = createMessage(ownProps.user, text, 'text');
      dispatch(sendMessage(message));
      dispatch(updateMessage({}));
      ownProps.onAddMessage(message);
    },
    onSubmitImage: (imageUrl) => {
      const user = ownProps.user;
      const message = createMessage(user, { alt: `Image uploaded by ${user.name}`, url: imageUrl}, 'image');
      dispatch(sendMessage(message));
      ownProps.onAddMessage(message);
    }
  };
};

const MessageInput = connect(
  mapStateToProps,
  mapDispatchToProps
)(TextInput);

export default MessageInput;
