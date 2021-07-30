import { postConstants } from "./constants";
import axiosInstance from "../axios";

export const getAllPosts = () => {
  return async (dispatch) => {
    dispatch({
      type: postConstants.GET_ALL_POST_REQUEST,
    });

    try {
      const res = await axiosInstance.get("/post/allPosts");

      if (res.status === 201) {
        dispatch({
          type: postConstants.GET_ALL_POST_SUCCESS,
          payload: { posts: res.data.posts },
        });
      } else {
        dispatch({
          type: postConstants.GET_ALL_POST_FAILURE,
          payload: { err: res.data.err },
        });
      }
    } catch (e) {
      dispatch({
        type: postConstants.GET_ALL_POST_FAILURE,
        payload: { err: "something went wrong" },
      });
      console.log(e);
    }
  };
};

export const getMyPosts = () => {
  return async (dispatch) => {
    dispatch({
      type: postConstants.GET_MY_POST_REQUEST,
    });

    try {
      const res = await axiosInstance.get("/post/myPosts");

      if (res.status === 201) {
        dispatch({
          type: postConstants.GET_MY_POST_SUCCESS,
          payload: { posts: res.data.posts },
        });
      } else {
        dispatch({
          type: postConstants.GET_MY_POST_FAILURE,
          payload: { err: res.data.err },
        });
      }
    } catch (e) {
      console.log(e);
    }
  };
};

export const createPost = (form) => {
  return async (dispatch) => {
    dispatch({
      type: postConstants.CREATE_POST_REQUEST,
    });
    try {
      const res = await axiosInstance.post("/post/create", form);
      if (res.status === 201) {
        dispatch({
          type: postConstants.CREATE_POST_SUCCESS,
          payload: { post: res.data.post },
        });
      } else {
        dispatch({
          type: postConstants.CREATE_POST_FAILURE,
          payload: { err: res.data.err },
        });
      }
    } catch (e) {
      console.log(e);
    }
  };
};

export const deletePost = (postId) => {
  return async (dispatch) => {
    dispatch({
      type: postConstants.DELETE_POST_REQUEST,
    });

    try {
      const res = await axiosInstance.post("/post/delete", { postId });
      if (res.status === 201) {
        dispatch({
          type: postConstants.DELETE_POST_SUCCESS,
          payload: {
            postId: res.data._id,
          },
        });
      } else {
        dispatch({
          type: postConstants.DELETE_POST_FAILURE,
          payload: {
            err: res.data.err,
          },
        });
      }
    } catch (e) {
      console.log(e);
    }
  };
};

export const likePost = (postId) => {
  return async (dispatch) => {
    dispatch({
      type: postConstants.LIKE_POST_REQUEST,
    });

    try {
      const res = await axiosInstance.post("/post/likePost", { postId });

      if (res.status === 201) {
        dispatch({
          type: postConstants.LIKE_POST_SUCCESS,
          payload: { post: res.data.post },
        });
      } else {
        dispatch({
          type: postConstants.LIKE_POST_FAILURE,
        });
      }
    } catch (e) {
      console.log(e);
    }
  };
};

export const unlikePost = (postId) => {
  return async (dispatch) => {
    dispatch({
      type: postConstants.UNLIKE_POST_REQUEST,
    });

    try {
      const res = await axiosInstance.post("/post/unlikePost", { postId });

      if (res.status === 201) {
        dispatch({
          type: postConstants.UNLIKE_POST_SUCCESS,
          payload: { postId: res.data.postId, userId: res.data.userId },
        });
      } else {
        dispatch({
          type: postConstants.UNLIKE_POST_FAILURE,
        });
      }
    } catch (e) {
      console.log(e);
    }
  };
};

export const getSavedPosts = () => {
  return async (dispatch) => {
    dispatch({
      type: postConstants.GET_SAVED_POSTS_REQUEST,
    });
    try {
      const res = await axiosInstance.post("/auth/user/getSavedPosts");

      if (res.status === 201) {
        dispatch({
          type: postConstants.GET_SAVED_POSTS_SUCCESS,
          payload: { savedPostsData: res.data.savedPosts },
        });
      } else {
        dispatch({
          type: postConstants.GET_SAVED_POSTS_FAILURE,
          payload: { err: res.data.err },
        });
      }
    } catch (e) {
      console.log(e);
    }
  };
};

export const getFeaturedPosts = () => {
  return async (dispatch) => {
    dispatch({
      type: postConstants.GET_FEATURED_POSTS_REQUEST,
    });

    try {
      const res = await axiosInstance.get("/post/featuredPosts");

      if (res.status === 201) {
        dispatch({
          type: postConstants.GET_FEATURED_POSTS_SUCCESS,
          payload: { posts: res.data.posts },
        });
      } else {
        dispatch({
          type: postConstants.GET_FEATURED_POSTS_FAILURE,
          payload: {
            err: res.data.err,
          },
        });
      }
    } catch (e) {
      console.log(e);
    }
  };
};
