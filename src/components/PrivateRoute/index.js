import React from "react";
import { Redirect, Route } from "react-router-dom";

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      component={(props) => {
        const token = localStorage.getItem("token");
        if (!(["undefined","null",undefined,null].includes(token))) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
}

export default PrivateRoute;
