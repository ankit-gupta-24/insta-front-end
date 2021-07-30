import { authConstants } from "../actions/constants";
const initialState = {
  token: null,
  user: {
    _id: "",
    name: "",
    email: "",
    username: "",
    bio: "",
    profilePic: "",
    followers: [],
    following: [],
    savedPosts: [],
  },
  authenticated: false,
  authenticating: false,
  err: null,
  loading: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authConstants.LOGIN_REQUEST:
      state = {
        ...state,
        authenticating: true,
      };
      break;
    case authConstants.LOGIN_SUCCESS:
      state = {
        ...state,
        authenticating: false,
        authenticated: true,
        token: action.payload.token,
        user: action.payload.user,
      };
      break;
    case authConstants.LOGIN_FAILURE:
      state = {
        ...state,
        authenticating: false,
        authenticated: false,
        err: action.payload.err,
      };
      break;

    case authConstants.SIGNUP_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case authConstants.SIGNUP_SUCCESS:
      state = {
        ...state,
        loading: false,
      };
      break;
    case authConstants.SIGNUP_FAILURE:
      state = {
        ...state,
        loading: false,
        err: action.payload.err,
      };
      break;

    case authConstants.LOGOUT_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case authConstants.LOGOUT_SUCCESS:
      state = {
        ...initialState,
        loading: false,
      };
      break;
    case authConstants.LOGOUT_FAILURE:
      state = {
        ...state,
        loading: false,
        err: action.payload.err,
      };
      break;

    case authConstants.UPDATE_PROFILE_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case authConstants.UPDATE_PROFILE_SUCCESS:
      state = {
        ...state,
        loading: false,
        user: action.payload.user,
      };
      break;
    case authConstants.UPDATE_PROFILE_FAILURE:
      state = {
        ...state,
        loading: false,
        err: action.payload.err,
      };
      break;

    case authConstants.SAVE_POST_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case authConstants.SAVE_POST_SUCCESS:
      state = {
        ...state,
        loading: false,
        user: action.payload.user,
      };
      break;
    case authConstants.SAVE_POST_FAILURE:
      state = {
        ...state,
        loading: false,
        err: action.payload.err,
      };
      break;

    case authConstants.UNSAVE_POST_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case authConstants.UNSAVE_POST_SUCCESS:
      state = {
        ...state,
        loading: false,
        user: action.payload.user,
      };
      break;
    case authConstants.UNSAVE_POST_FAILURE:
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

export default authReducer;
