import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSavedPosts } from "../../../actions";
import ProfilePostCard from "../../../components/ProfilePostCard";
import "./style.css";

function SavedPosts(props) {
  const post = useSelector((state) => state.post);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSavedPosts());
  }, [dispatch]);

  return (
    <div className="savedPosts">
      <h1 style={{ textAlign: "center" }}>Saved Post</h1>
      <div className="postContainer">
        {post.savedPostsData.length > 0 ? (
          <>
            {post.savedPostsData.map((_post) => {
              return (
                <ProfilePostCard
                  key={_post._id}
                  post={_post.postId}
                  unsaveBtn
                />
              );
            })}
          </>
        ) : (
          <p>No Saved Post</p>
        )}
      </div>
    </div>
  );
}

export default SavedPosts;
