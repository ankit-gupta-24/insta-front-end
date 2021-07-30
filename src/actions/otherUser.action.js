import axiosInstance from "../axios";
import { userConstants } from "./constants";

export const getOtherUser = (username) => {
  return async (dispatch) => {
    dispatch({
      type: userConstants.GET_USER_REQUEST,
    });

    try {
      const res = await axiosInstance.post("/auth/user/get", { username });

      if (res.status === 201) {
        dispatch({
          type: userConstants.GET_USER_SUCCESS,
          payload: { user: res.data.user },
        });
      } else {
        dispatch({
          type: userConstants.GET_USER_FAILURE,
          payload: { err: res.data.err },
        });
      }
    } catch (e) {
      console.log(e);
    }
  };
};

export const getOtherUserPosts = (_id) => {
  return async (dispatch) => {
    dispatch({
      type: userConstants.GET_OTHERUSER_POST_REQUEST,
    });
    try {
      const res = await axiosInstance.post("/post/otherUserPosts", {
        _id: _id,
      });
      if (res.status === 201) {
        dispatch({
          type: userConstants.GET_OTHERUSER_POST_SUCCESS,
          payload: { posts: res.data.posts },
        });
      } else {
        dispatch({
          type: userConstants.GET_OTHERUSER_POST_FAILURE,
          payload: { err: res.data.err },
        });
      }
    } catch (e) {
      console.log(e);
    }
  };
};

export const followOtherUser = (userId) => {
  return async (dispatch) => {
    dispatch({
      type: userConstants.FOLLOW_OTHER_USER_REQUEST,
    });

    try {
      const res = await axiosInstance.post("/auth/user/follow", { userId });

      if (res.status === 201) {
        dispatch({
          type: userConstants.FOLLOW_OTHER_USER_SUCCESS,
        });
      } else {
        dispatch({
          type: userConstants.FOLLOW_OTHER_USER_FAILURE,
        });
      }
    } catch (e) {
      console.log(e);
    }
  };
};
export const unfollowOtherUser = (userId) => {
  return async (dispatch) => {
    dispatch({
      type: userConstants.UNFOLLOW_OTHER_USER_REQUEST,
    });

    try {
      const res = await axiosInstance.post("/auth/user/unfollow", { userId });

      if (res.status === 201) {
        dispatch({
          type: userConstants.UNFOLLOW_OTHER_USER_SUCCESS,
        });
      } else {
        dispatch({
          type: userConstants.UNFOLLOW_OTHER_USER_FAILURE,
        });
      }
    } catch (e) {
      console.log(e);
    }
  };
};
