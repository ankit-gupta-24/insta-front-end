import React, { useState } from "react";
import { NavLink, Redirect } from "react-router-dom";
import CustomInput from "../../components/CustomInput";
import BrandLogo from "../../components/BrandLogo";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../actions";

function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const userSignup = (e) => {
    e.preventDefault();
    if (email && password) {
      const user = {
        name,
        email,
        password,
      };
      dispatch(signup(user)).then((res) => {
        setName("");
        setEmail("");
        setPassword("");
      });
    }
  };

  // useEffect(() => {
  //   if (auth.authenticated) {
  //   }
  // }, [auth.authenticated]);

  if (auth.authenticated) {
    return <Redirect to="/" />;
  }

  return (
    <div className={"loginSignup"}>
      <BrandLogo />
      <h3>Sign Up</h3>
      <div className={"inputcontainer"}>
        <CustomInput
          type={"text"}
          name={"name"}
          value={name}
          onChange={setName}
          title={"Enter Name"}
        />
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

        <button onClick={userSignup}>Sign Up</button>
      </div>
      <p style={{ fontSize: "12px" }}>
        Already have an account? <NavLink to="/login">Login here!</NavLink>
      </p>
    </div>
  );
}

export default SignupPage;
