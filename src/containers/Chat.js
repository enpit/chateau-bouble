import { connect } from 'react-redux';

import ChatView from '../components/ChatView';

const mapStateToProps = state => {
  return {
    messages: state.messages.all
  }
};

const mapDispatchToProps = dispatch => {
  return {};
};

const Chat = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatView);

export default Chat;
