import { commentConstants } from "../actions/constants";

const initialState = {
  comments: [],
  err: null,
  loading: false,
};

const updateComments = (comments, newComment) => {
  comments.unshift(newComment);
  return comments;
};

const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case commentConstants.GET_COMMENT_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case commentConstants.GET_COMMENT_SUCCESS:
      state = {
        ...state,
        loading: false,
        comments: action.payload.comments,
      };
      break;
    case commentConstants.GET_COMMENT_FAILURE:
      state = {
        ...state,
        loading: false,
        err: action.payload.err,
      };
      break;
    case commentConstants.POST_COMMENT_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case commentConstants.POST_COMMENT_SUCCESS:
      state = {
        ...state,
        loading: false,
        comments: updateComments(state.comments, action.payload.newComment),
      };
      break;
    case commentConstants.POST_COMMENT_FAILURE:
      state = {
        ...state,
        loading: false,
        err: action.payload.err,
      };
      break;

    default:
      break;
  }
  return state;
};

export default commentReducer;
