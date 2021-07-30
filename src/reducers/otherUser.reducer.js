import { userConstants } from "../actions/constants";

const initialState = {
  user: {},
  posts: [],
  err: null,
  loading: false,
};

const otherUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case userConstants.GET_USER_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case userConstants.GET_USER_SUCCESS:
      state = {
        ...state,
        loading: false,
        user: action.payload.user,
      };
      break;
    case userConstants.GET_USER_FAILURE:
      state = {
        ...state,
        loading: false,
        err: action.payload.err,
      };
      break;
    case userConstants.GET_OTHERUSER_POST_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case userConstants.GET_OTHERUSER_POST_SUCCESS:
      state = {
        ...state,
        loading: false,
        posts: action.payload.posts,
      };
      break;
    case userConstants.GET_OTHERUSER_POST_FAILURE:
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

export default otherUserReducer;
