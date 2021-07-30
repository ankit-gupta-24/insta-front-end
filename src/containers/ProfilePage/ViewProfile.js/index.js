import React, { useState } from "react";
import "./style.css";
import { useSelector } from "react-redux";
import { generatPublicURL } from "../../../urlConfig";
import FollowerList from "../FollowerList";
import FollowingList from "../FollowingList";

function ViewProfile(props) {
  const auth = useSelector((state) => state.auth);
  const post = useSelector((state) => state.post);

  const [showFollowerList, setShowFollowerList] = useState(false);
  const [showFollowingList, setShowFollowingList] = useState(false);

  return (
    <>
      <div className="viewProfile">
        <div className="imgWrapper">
          <img
            src={generatPublicURL(auth.user.profilePic)}
            alt={auth.user.name}
          />
        </div>

        <div className="profileDetail">
          <h1>{auth.user.username}</h1>
          <div>
            <p>
              <span>
                <b>{post.posts.length}</b> Post
              </span>
              <span
                style={{ cursor: "pointer" }}
                onClick={() => setShowFollowerList(true)}
              >
                <b>{auth.user.followers.length}</b> Followers
              </span>
              <span
                style={{ cursor: "pointer" }}
                onClick={() => setShowFollowingList(true)}
              >
                <b>{auth.user.following.length}</b> Following
              </span>
            </p>
          </div>
          <div className="nickname">
            <p>{auth.user.name} </p>
          </div>
          <div className="bio">
            <pre>{auth.user.bio ? auth.user.bio : null}</pre>
          </div>
        </div>
      </div>
      {showFollowerList && <FollowerList close={setShowFollowerList} />}
      {showFollowingList && <FollowingList close={setShowFollowingList} />}
    </>
  );
}

export default ViewProfile;
