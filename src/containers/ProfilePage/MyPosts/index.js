import React from "react";
import ProfilePostCard from "../../../components/ProfilePostCard";
import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// import { getMyPosts } from "../../../actions";
import "./style.css";
import { NavLink } from "react-router-dom";

function MyPosts(props) {
  const post = useSelector((state) => state.post);

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getMyPosts());
  // }, []);
  return (
    <div className="myPosts">
      <h1 style={{ textAlign: "center" }}>My Posts</h1>
      <div className="postContainer">
        {post.posts.length > 0 ? (
          post.posts.map((_post) => {
            return <ProfilePostCard key={_post._id} post={_post} deleteBtn />;
          })
        ) : (
          <p>
            No Post Yet !{" "}
            <NavLink to="/profile?q=createNewPost">Create New</NavLink>
          </p>
        )}
      </div>
    </div>
  );
}

export default MyPosts;
