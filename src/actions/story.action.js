import axiosInstance from "../axios";
import { storyConstants } from "./constants";

export const createStory = (form) => {
  return async (dispatch) => {
    dispatch({
      type: storyConstants.CREATE_STORY_REQUEST,
    });

    try {
      const res = await axiosInstance.post("/story/create", form);

      if (res.status === 201) {
        dispatch({
          type: storyConstants.CREATE_STORY_SUCCESS,
          payload: { story: res.data.story },
        });
      } else {
        dispatch({
          type: storyConstants.CREATE_STORY_FAILURE,
          payload: { err: res.data.err },
        });
      }
    } catch (e) {
      console.log(e);
    }
  };
};

export const getStoryList = () => {
  return async (dispatch) => {
    dispatch({
      type: storyConstants.GET_STORYLIST_REQUEST,
    });

    try {
      const res = await axiosInstance.get("/story/getStoryList");

      if (res.status === 201) {
        dispatch({
          type: storyConstants.GET_STORYLIST_SUCCESS,
          payload: { storyList: res.data.storyList },
        });
      } else {
        dispatch({
          type: storyConstants.GET_STORYLIST_FAILURE,
          payload: { errr: res.data.err },
        });
      }
    } catch (e) {
      console.log(e);
    }
  };
};

export const increseStoryViewCount = (storyId) => {
  return async (dispatch) => {
    dispatch({
      type: storyConstants.INC_STORY_VIEW_COUNT_REQUEST,
    });

    try {
      const res = await axiosInstance.post("/story/incrementViewCount", {
        storyId,
      });

      if (res.status === 201) {
        const userId = JSON.parse(localStorage.getItem("user"))._id;
        dispatch({
          type: storyConstants.INC_STORY_VIEW_COUNT_SUCCESS,
          payload: { userId, storyId },
        });
      } else {
        dispatch({
          type: storyConstants.INC_STORY_VIEW_COUNT_FAILURE,
          payload: { err: res.data.err },
        });
      }
    } catch (e) {
      console.log(e);
    }
  };
};

export const getArchives = () => {
  return async (dispatch) => {
    dispatch({
      type: storyConstants.GET_ARCHIVES_REQUEST,
    });

    try {
      const res = await axiosInstance.get("/story/getArchives");

      if (res.status === 201) {
        dispatch({
          type: storyConstants.GET_ARCHIVES_SUCCESS,
          payload: { storyList: res.data.storyList },
        });
      } else {
        dispatch({
          type: storyConstants.GET_ARCHIVES_FAILURE,
          payload: { err: res.data.err },
        });
      }
    } catch (e) {
      console.log(e);
    }
  };
};

export const deleteArchive = (storyId) => {
  return async (dispatch) => {
    dispatch({
      type: storyConstants.DELETE_ARCHIVE_REQUEST,
    });

    try {
      const res = await axiosInstance.post("/story/deleteArchive", { storyId });

      if (res.status === 201) {
        dispatch({
          type: storyConstants.DELETE_ARCHIVE_SUCCESS,
          payload: { storyId: res.data.storyId },
        });
      } else {
        dispatch({
          type: storyConstants.DELETE_ARCHIVE_FAILURE,
          payload: { err: res.data.err },
        });
      }
    } catch (e) {
      console.log(e);
    }
  };
};
