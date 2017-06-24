import { connect } from 'react-redux';

import ChatView from '../components/ChatView';

const mapStateToProps = state => {
  return {
    messages: state.messages.all,
    user: state.messages.user
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

const Chat = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatView);

export default Chat;
