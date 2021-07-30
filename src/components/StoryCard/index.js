import React, { useState } from "react";
import { AiOutlineDelete, AiOutlineEye } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { deleteArchive } from "../../actions";
import { generatPublicURL } from "../../urlConfig";
import StoryViewerList from '../StoryViewerList';
import "./style.css";

function StoryCard(props) {
  const [showStoryViewerList, setShowStoryViewerList] = useState(false);
  const dispatch = useDispatch();
  const deleteThisStory = () => {
    dispatch(deleteArchive(props.story._id));
  };
  return (
    <div className="storyCard">
      <div className="imgWrapper">
        <img
          src={generatPublicURL(props.story.photos[0].img)}
          alt={props.story.sharedBy.username}
        />
      </div>
      <div className="storyDeleteBtn">
        <span onClick={() => setShowStoryViewerList(true)}>
          <AiOutlineEye /> {props.story.seenBy.length}
        </span>
        <AiOutlineDelete onClick={deleteThisStory} className="delBtn" />
      </div>
      {showStoryViewerList && (
        <StoryViewerList
          close={setShowStoryViewerList}
          list={props.story.seenBy}
        />
      )}
    </div>
  );
}

export default StoryCard;
