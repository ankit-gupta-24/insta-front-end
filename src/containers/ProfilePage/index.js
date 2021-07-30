import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getMyPosts } from "../../actions";
import Layout from "../../components/Layout";
import { getURLParams } from "../../urlConfig";
import CreateNewPost from "./CreateNewPost";
import MyPosts from "./MyPosts";
import SideNav from "./SideNav";
import ViewProfile from "./ViewProfile.js";
import SavedPosts from "./SavedPosts";
import CreateStory from "./CreateStory";
import EditProfile from "./EditProfile";
import StoryArchves from "./StoryArchives";

import "./style.css";

function ProfilePage(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMyPosts());
  }, [dispatch]);

  const renderContent = () => {
    const params = getURLParams(props.location.search);
    let content = null;
    switch (params.q) {
      case "edit":
        content = <EditProfile />;
        break;
      case "createNewPost":
        content = <CreateNewPost />;
        break;
      case "myPosts":
        content = <MyPosts />;
        break;
      case "saved":
        content = <SavedPosts />;
        break;
      case "createStory":
        content = <CreateStory />;
        break;
      case "storyArchives":
        content = <StoryArchves />;
        break;
      case "settings":
        content = "settings";
        break;
      case "privacy":
        content = "privacy";
        break;
      default:
        content = <ViewProfile />;
    }
    return content;
  };

  return (
    <Layout>
      <div className="profilePage">
        <SideNav />
        <div className="content">{renderContent()}</div>
      </div>
    </Layout>
  );
}

export default ProfilePage;
