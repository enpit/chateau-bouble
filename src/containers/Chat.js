import { connect } from 'react-redux';

import ChatView from '../components/ChatView';

const mapStateToProps = state => {
  return {
    messages: state.messages.all,
    user: state.messages.user,
    theme: state.themes.current
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onAddMessage: (message) => {
      ownProps.onAddMessage(message);
    }
  };
};

const Chat = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatView);

export default Chat;
