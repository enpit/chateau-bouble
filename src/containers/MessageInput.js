import { connect } from 'react-redux';

import { sendMessage } from '../actions/messages';
import TextInput from '../components/TextInput';

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSubmit: (text) => {
      const message = { author: ownProps.user, text };
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
