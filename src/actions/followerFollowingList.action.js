import { followingConstant, followerConstant } from "./constants";
import axiosInstance from "../axios";

export const getFollowerList = () => {
  return async (dispatch) => {
    dispatch({
      type: followerConstant.GET_FOLLOWER_REQUEST,
    });

    try {
      const res = await axiosInstance.get("/auth/user/getFollowerList");
      if (res.status === 201) {
        dispatch({
          type: followerConstant.GET_FOLLOWER_SUCCESS,
          payload: { followerList: res.data.followerList },
        });
      } else {
        dispatch({
          type: followerConstant.GET_FOLLOWER_FAILURE,
          payload: { err: res.data.err },
        });
      }
    } catch (e) {
      console.log(e);
    }
  };
};

export const getFollowingList = () => {
  return async (dispatch) => {
    dispatch({
      type: followingConstant.GET_FOLLOWING_REQUEST,
    });

    try {
      const res = await axiosInstance.get("/auth/user/getFollowingList");
      if (res.status === 201) {
        dispatch({
          type: followingConstant.GET_FOLLOWING_SUCCESS,
          payload: { followingList: res.data.followingList },
        });
      } else {
        dispatch({
          type: followingConstant.GET_FOLLOWING_FAILURE,
          payload: { err: res.data.err },
        });
      }
    } catch (e) {
      console.log(e);
    }
  };
};
