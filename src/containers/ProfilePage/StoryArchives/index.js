import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getArchives } from "../../../actions";
import StoryCard from "../../../components/StoryCard";
import "./style.css";

function StoryArchves() {
  const story = useSelector((state) => state.story);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getArchives());
  }, [dispatch]);
  return (
    <div className="storyArchives">
      <h1 style={{ textAlign: "center" }}>Archives</h1>
      <div className="storyContainer">
        {story.storyList.length > 0 ? (
          <>
            {story.storyList.map((_story) => {
              return <StoryCard key={_story._id} story={_story} />;
            })}
          </>
        ) : (
          <p>No Archives</p>
        )}
      </div>
    </div>
  );
}

export default StoryArchves;
