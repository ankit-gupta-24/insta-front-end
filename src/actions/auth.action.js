import axiosInstance from "../axios";
import { authConstants } from "./constants";

export const login = (user) => {
  return async (dispatch) => {
    dispatch({
      type: authConstants.LOGIN_REQUEST,
    });

    try {
      const res = await axiosInstance.post("/auth/signin", { ...user });

      if (res.status === 201) {
        const { token, user } = res.data;
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));

        dispatch({
          type: authConstants.LOGIN_SUCCESS,
          payload: {
            token,
            user,
          },
        });
      } else {
        dispatch({
          type: authConstants.LOGIN_FAILURE,
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

export const isUserLoggedIn = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");

    if (!["undefined", "null", undefined, null].includes(token)) {
      const luser = JSON.parse(localStorage.getItem("user"));
      try {
        const res = await axiosInstance.post("/auth/user/get", {
          username: luser.username,
        });

        if (res.status === 201) {
          const { user } = res.data;
          localStorage.setItem("user", JSON.stringify(user));
          dispatch({
            type: authConstants.LOGIN_SUCCESS,
            payload: {
              token,
              user,
            },
          });
        } else {
          dispatch({
            type: authConstants.LOGIN_FAILURE,
            payload: {
              err: res.data.err,
            },
          });
        }
      } catch (e) {
        dispatch({
          type: authConstants.LOGIN_FAILURE,
          payload: {
            err: e,
          },
        });
      }
    } else {
      dispatch({
        type: authConstants.LOGIN_FAILURE,
        payload: {
          err: "unable to login",
        },
      });
    }
  };
};

export const signup = (user) => {
  return async (dispatch) => {
    dispatch({
      type: authConstants.SIGNUP_REQUEST,
    });

    try {
      const res = await axiosInstance.post("/auth/signup", { ...user });

      if (res.status === 201) {
        dispatch({
          type: authConstants.SIGNUP_SUCCESS,
        });

        const { token, user } = res.data;
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));

        dispatch({
          type: authConstants.LOGIN_SUCCESS,
          payload: {
            token,
            user,
          },
        });
      } else {
        dispatch({
          type: authConstants.SIGNUP_FAILURE,
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

export const logout = () => {
  return async (dispatch) => {
    dispatch({
      type: authConstants.LOGOUT_REQUEST,
    });

    try {
      const res = await axiosInstance.post("/auth/signout");

      if (res.status === 201) {
        localStorage.clear();
        dispatch({
          type: authConstants.LOGOUT_SUCCESS,
        });
      } else {
        dispatch({
          type: authConstants.LOGOUT_FAILURE,
          payload: { err: res.data.err },
        });
      }
    } catch (e) {
      console.log(e);
    }
  };
};

export const updateMyProfile = (form) => {
  return async (dispatch) => {
    dispatch({
      type: authConstants.UPDATE_PROFILE_REQUEST,
    });

    try {
      const res = await axiosInstance.post("/auth/user/update", form);

      if (res.status === 201) {
        localStorage.setItem("user", JSON.stringify(res.data.user));
        dispatch({
          type: authConstants.UPDATE_PROFILE_SUCCESS,
          payload: { user: res.data.user },
        });
      } else {
        dispatch({
          type: authConstants.UPDATE_PROFILE_FAILURE,
          payload: { err: res.data.err },
        });
      }
    } catch (e) {
      console.log(e);
    }
  };
};

export const savePost = (postId) => {
  return async (dispatch) => {
    dispatch({
      type: authConstants.SAVE_POST_REQUEST,
    });

    try {
      const res = await axiosInstance.post("/auth/user/savePost", { postId });

      if (res.status === 201) {
        localStorage.setItem("user", JSON.stringify(res.data.user));
        dispatch({
          type: authConstants.SAVE_POST_SUCCESS,
          payload: { user: res.data.user },
        });
      } else {
        dispatch({
          type: authConstants.SAVE_POST_FAILURE,
          payload: { err: res.data.err },
        });
      }
    } catch (e) {
      console.log(e);
    }
  };
};

export const unsavePost = (postId) => {
  return async (dispatch) => {
    dispatch({
      type: authConstants.UNSAVE_POST_REQUEST,
    });

    try {
      const res = await axiosInstance.post("/auth/user/unsavePost", { postId });

      if (res.status === 201) {
        localStorage.setItem("user", JSON.stringify(res.data.user));
        dispatch({
          type: authConstants.UNSAVE_POST_SUCCESS,
          payload: { user: res.data.user },
        });
      } else {
        dispatch({
          type: authConstants.UNSAVE_POST_FAILURE,
          payload: { err: res.data.err },
        });
      }
    } catch (e) {
      console.log(e);
    }
  };
};

