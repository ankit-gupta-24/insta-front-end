import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  followOtherUser,
  unfollowOtherUser,
  getOtherUser,
  getOtherUserPosts,
} from "../../actions";
import Layout from "../../components/Layout";
import ProfilePostCard from "../../components/ProfilePostCard";
import { generatPublicURL } from "../../urlConfig";
import "./style.css";

function OtherUserProfilePage(props) {
  const [username] = useState(props.match.params.username);

  const dispatch = useDispatch();
  const otherUser = useSelector((state) => state.otherUser);
  const auth = useSelector((state) => state.auth);

  const followUser = () => {
    dispatch(followOtherUser(otherUser.user._id));
  };
  const unfollowUser = () => {
    dispatch(unfollowOtherUser(otherUser.user._id));
  };

  useEffect(() => {
    dispatch(getOtherUser(username));
  }, [dispatch,username]);

  useEffect(() => {
    dispatch(getOtherUserPosts(otherUser.user._id));
  }, [otherUser.user._id,dispatch]);

  return (
    <Layout>
      {Object.keys(otherUser.user).length > 0 ? (
        <div className="container">
          <div className="row1">
            <div className="imgWrapper col1">
              <img
                src={generatPublicURL(otherUser.user.profilePic)}
                alt={otherUser.user.name}
              />
              <h2>{otherUser.user.username}</h2>
            </div>
            <div className="col2">
              <h4>{otherUser.user.name}</h4>
              <p>
                <b>{otherUser.posts.length}</b> Post &nbsp;&nbsp;
                <b>{otherUser.user.followers.length}</b> Follower &nbsp;&nbsp;
                <b>{otherUser.user.following.length}</b> Following
              </p>
              <div>
                <pre>{otherUser.user.bio}</pre>
              </div>
              {otherUser.user._id !== auth.user._id && (
                <div>
                  {otherUser.user.followers.reduce((prev, obj) => {
                    return prev || obj.userId === auth.user._id;
                  }, false) ? (
                    <button onClick={unfollowUser}>Unfollow</button>
                  ) : (
                    <button onClick={followUser}>Follow</button>
                  )}
                </div>
              )}
            </div>
          </div>
          <h2 style={{ textAlign: "center" }}>Post</h2>
          <div className="row2">
            {otherUser.posts && otherUser.posts.length > 0 ? (
              <>
                {otherUser.posts.map((post) => {
                  return <ProfilePostCard key={post._id} post={post} />;
                })}
              </>
            ) : (
              <p>No Post Yet</p>
            )}
          </div>
        </div>
      ) : (
        <p>No User Found</p>
      )}
    </Layout>
  );
}

export default OtherUserProfilePage;
