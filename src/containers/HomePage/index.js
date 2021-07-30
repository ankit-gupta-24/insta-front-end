import React, { useEffect } from "react";
import { getAllPosts, getStoryList } from "../../actions";
import Layout from "../../components/Layout";
import PostCard from "../../components/PostCard";

// import avatar from "../../images/avatar.png";
import { useDispatch, useSelector } from "react-redux";
import "./style.css";

import StoryListItem from "./StoryListItem";

function HomePage() {
  const dispatch = useDispatch();
  const post = useSelector((state) => state.post);
  const story = useSelector((state) => state.story);

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getStoryList());
  }, [dispatch]);

  return (
    <>
      <Layout>
        <div className="homePage">
          {story.storyList.length > 0 && (
            <div className="storyList">
              {story.storyList.map((_story, index) => {
                return <StoryListItem story={_story} key={_story._id} />;
              })}
            </div>
          )}

          <div className="postList">
            {post.posts.map((_post) => {
              return <PostCard key={_post._id} post={_post} />;
            })}
          </div>
        </div>
      </Layout>
    </>
  );
}

export default HomePage;
