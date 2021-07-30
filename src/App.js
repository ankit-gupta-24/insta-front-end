import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginPage from "./containers/LoginPage";
import SignupPage from "./containers/SignupPage";
import HomePage from "./containers/HomePage";
import InboxPage from "./containers/InboxPage";
import ExplorePage from "./containers/ExplorePage";
import NotificationPage from "./containers/NotificationPage";
import ProfilePage from "./containers/ProfilePage";
import { useDispatch, useSelector } from "react-redux";
import { isUserLoggedIn } from "./actions";
import PrivateRoute from "./components/PrivateRoute";
import OtherUserProfilePage from "./containers/OtherUserProfilePage";

function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (!auth.authenticated) {
      dispatch(isUserLoggedIn());
    }
  }, [auth.authenticated,dispatch]);

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignupPage} />
          <PrivateRoute path="/inbox" component={InboxPage} />
          <PrivateRoute path="/explore" component={ExplorePage} />
          <PrivateRoute path="/notification" component={NotificationPage} />
          <PrivateRoute path="/profile" component={ProfilePage} />
          <PrivateRoute path="/u/:username" component={OtherUserProfilePage} />
          <PrivateRoute path="/" component={HomePage} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
