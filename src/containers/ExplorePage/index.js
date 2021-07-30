import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../components/Layout";
import { getFeaturedPosts } from "../../actions";
import ProfilePostCard from "../../components/ProfilePostCard";
import "./style.css";

function ExplorePage() {
  const dispatch = useDispatch();
  const post = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(getFeaturedPosts());
  }, [dispatch]);
  return (
    <Layout>
      <div className="explorePage">
        {post.posts.map((_post) => {
          return <ProfilePostCard key={_post._id} post={_post} />;
        })}
      </div>
    </Layout>
  );
}

export default ExplorePage;
