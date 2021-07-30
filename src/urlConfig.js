export const apiBaseUrl = "http://insta-back-end-ankit.herokuapp.com/api";

export const generatPublicURL = (filename) => {
  return `http://insta-back-end-ankit.herokuapp.com/public/${filename}`;
};

export const getURLParams = (url) => {
  if (url.length > 0) {
    const paramsString = url.split("?")[1];
    if (paramsString.length > 0) {
      const paramsArr = paramsString.split("&");
      let params = {};

      paramsArr.forEach((param) => {
        const keyVal = param.split("=");
        params[keyVal[0]] = keyVal[1];
      });

      return params;
    }
    return {};
  }
  return {};
};
