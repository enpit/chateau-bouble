import { connect } from 'react-redux';

import {
  updateMessage
} from '../actions/messages';
import EmojiPicker from '../components/EmojiPicker';

const createMessage = (user, content, type) =>
  ({ author: user, content, time: (new Date()).getTime(), type });

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onPickEmoji: (emoji) => {
      const message = createMessage(ownProps.user, ownProps.content + emoji.native, 'text');
      dispatch(updateMessage(message));
    }
  };
};

const EmojiPickInput = connect(
  mapStateToProps,
  mapDispatchToProps
)(EmojiPicker);

export default EmojiPickInput;
