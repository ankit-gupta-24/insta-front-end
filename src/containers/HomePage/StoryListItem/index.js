import React, { useState } from "react";
import ViewSingleStory from "../ViewSingleStory";
import { generatPublicURL } from "../../../urlConfig";
import { useSelector } from "react-redux";

function StoryListItem(props) {
  const [showModal, setShowModal] = useState(false);

  const auth = useSelector((state) => state.auth);

  const renderStoryModal = () => {
    setShowModal(true);
  };
  return (
    <>
      <div className="imgWrapper" onClick={renderStoryModal}>
        <img
          className={
            props.story.seenBy.includes(auth.user._id)
              ? "borderGray"
              : "borderRed"
          }
          src={generatPublicURL(props.story.sharedBy.profilePic)}
          alt={
            props.story.sharedBy.username &&
            props.story.sharedBy.username.length > 10
              ? props.story.sharedBy.username.substring(0, 10) + "..."
              : props.story.sharedBy.username
          }
        />
        <span>
          {props.story.sharedBy.username &&
          props.story.sharedBy.username.length > 10
            ? props.story.sharedBy.username.substring(0, 10) + "..."
            : props.story.sharedBy.username}
        </span>
      </div>
      {showModal && (
        <ViewSingleStory story={props.story} close={setShowModal} />
      )}
    </>
  );
}

export default StoryListItem;
