import { searchConstants } from "../actions/constants";

const initialState = {
  users: [],
  err: null,
  loading: true,
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case searchConstants.SEARCH_USER_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case searchConstants.SEARCH_USER_SUCCESS:
      state = {
        ...state,
        loading: false,
        users: action.payload.users,
      };
      break;
    case searchConstants.SEARCH_USER_FAILURE:
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

export default searchReducer;