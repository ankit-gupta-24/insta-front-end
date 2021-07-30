import axiosInstance from "../axios";
import { commentConstants } from "./constants";

export const getComments = (postId) => {
  return async (dispatch) => {
    dispatch({
      type: commentConstants.GET_COMMENT_REQUEST,
    });

    try {
      const res = await axiosInstance.post("/comment/getComments", { postId });

      if (res.status === 201) {
        dispatch({
          type: commentConstants.GET_COMMENT_SUCCESS,
          payload: { comments: res.data.comments },
        });
      } else {
        dispatch({
          type: commentConstants.GET_COMMENT_FAILURE,
          payload: { err: res.data.err },
        });
      }
    } catch (e) {
      console.log(e);
    }
  };
};

export const postComments = (obj) => {
  return async (dispatch) => {
    dispatch({
      type: commentConstants.POST_COMMENT_REQUEST,
    });

    try {
      const res = await axiosInstance.post("/comment/postComment", { ...obj });

      if (res.status === 201) {
        dispatch({
          type: commentConstants.POST_COMMENT_SUCCESS,
          payload: { newComment: res.data.newComment },
        });
      } else {
        dispatch({
          type: commentConstants.POST_COMMENT_FAILURE,
          payload: { err: res.data.err },
        });
      }
    } catch (e) {
      console.log(e);
    }
  };
};
