import { searchConstants } from "./constants";
import axiosInstance from "../axios";

export const searchUser = (searchKey) => {
  return async (dispatch) => {
    dispatch({
      type: searchConstants.SEARCH_USER_REQUEST,
    });

    try {
      const res = await axiosInstance.post("/auth/user/search", { searchKey });

      if (res.status === 201) {
        dispatch({
          type: searchConstants.SEARCH_USER_SUCCESS,
          payload: { users: res.data.users },
        });
      } else {
        dispatch({
          type: searchConstants.SEARCH_USER_FAILURE,
          payload: { err: res.data.err },
        });
      }
    } catch (e) {
      console.log(e);
    }
  };
};
