import { followerConstant, followingConstant } from "../actions/constants";

const initialState = {
  followerList: [],
  followingList: [],
  loading: false,
  err: null,
};

export const followerFollowingListReducer = (state = initialState, action) => {
  switch (action.type) {
    case followerConstant.GET_FOLLOWER_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case followerConstant.GET_FOLLOWER_SUCCESS:
      state = {
        ...state,
        loading: false,
        followerList: action.payload.followerList,
      };
      break;
    case followerConstant.GET_FOLLOWER_FAILURE:
      state = {
        ...state,
        loading: false,
        err: action.payload.err,
      };
      break;
    case followingConstant.GET_FOLLOWING_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case followingConstant.GET_FOLLOWING_SUCCESS:
      state = {
        ...state,
        loading: false,
        followingList: action.payload.followingList,
      };
      break;
    case followingConstant.GET_FOLLOWING_FAILURE:
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

export default followerFollowingListReducer;
