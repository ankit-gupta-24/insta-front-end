import axios from "axios";
import { authConstants } from "../actions/constants";
import store from "../store";
import { apiBaseUrl } from "../urlConfig";

const token = localStorage.getItem("token");

const axiosInstance = axios.create({
  baseURL: apiBaseUrl,
  headers: {
    Authorization: token ? `Bearer ${token}` : null,
  },
});

axiosInstance.interceptors.request.use((req) => {
  const {auth} = store.getState();

  if (auth.token) {
    req.headers.Authorization = `Bearer ${auth.token}`;
  }
  return req;
});

axiosInstance.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    const status = err.response ? err.response.status : 400;
    if (status && status === 400) {
      // localStorage.clear();
      store.dispatch({ type: authConstants.LOGOUT_SUCCESS });
    }
    return Promise.reject(err);
  }
);

export default axiosInstance;
