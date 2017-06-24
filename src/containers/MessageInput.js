import { connect } from 'react-redux';

import {
  updateMessage,
  sendMessage
} from '../actions/messages';
import TextInput from '../components/TextInput';

const mapStateToProps = state => {
  return { text: state.messages.current.text || '' };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onUpdateMessage: (text) => {
      const message = { author: ownProps.user, text };
      dispatch(updateMessage(message));
    },
    onSubmit: (text) => {
      const message = { author: ownProps.user, text };
      dispatch(sendMessage(message));
      dispatch(updateMessage({}));
      ownProps.onAddMessage(message);
    }
  };
};

const MessageInput = connect(
  mapStateToProps,
  mapDispatchToProps
)(TextInput);

export default MessageInput;
