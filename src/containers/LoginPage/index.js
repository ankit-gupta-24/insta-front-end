import React, {  useState } from "react";
import { NavLink, Redirect } from "react-router-dom";
import CustomInput from "../../components/CustomInput";
import BrandLogo from "../../components/BrandLogo";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const userLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      const user = {
        email,
        password,
      };
      dispatch(login(user)).then((res) => {
        setEmail("");
        setPassword("");
      });
    }
  };

  if (auth.authenticated) {
    return <Redirect to="/" />;
  }

  return (
    <div className={"loginSignup"}>
      <BrandLogo />
      <h3>Log In</h3>
      <div className={"inputcontainer"}>
        <CustomInput
          type={"email"}
          name={"email"}
          value={email}
          onChange={setEmail}
          title={"Enter Email"}
        />
        <CustomInput
          type={"password"}
          name={"password"}
          value={password}
          onChange={setPassword}
          title={"Enter Password"}
        />

        <button onClick={userLogin}>Log In</button>
      </div>
      <p style={{ fontSize: "12px" }}>
        Don't have an account? <NavLink to="/signup">Sign up here!</NavLink>
      </p>
    </div>
  );
}

export default LoginPage;
