import React, { useEffect } from "react";
import { generatPublicURL } from "../../../urlConfig";
import { GrClose } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { increseStoryViewCount } from "../../../actions";
import "./style.css";

function ViewSingleStory(props) {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  // const d = new Date(props.story.createdAt)

  useEffect(() => {
    if (!props.story.seenBy.includes(auth.user._id)) {
      dispatch(increseStoryViewCount(props.story._id));
    }
  }, [auth.user._id,dispatch,props.story._id,props.story.seenBy]);

  useEffect(() => {
    setTimeout(() => {
      props.close(false);
    }, 15000);
  }, [props]);

  return (
    <div className="viewStory">
      <div className="content">
        <div className="storyImgWrapper">
          <img
            src={generatPublicURL(props.story.photos[0].img)}
            alt={props.story.sharedBy.username}
          />
        </div>
        <div className="sharedBy">
          <div className="profilePicWrapper">
            <img
              src={generatPublicURL(props.story.sharedBy.profilePic)}
              alt={props.story.sharedBy.username}
            />
          </div>
          <p>{props.story.sharedBy.username}</p>
        </div>
        <div className="viewCount">
          <p>
            <b>{props.story.seenBy.length}</b>&nbsp;&nbsp;Views 
          </p>
        </div>
      </div>
      <GrClose onClick={(e) => props.close(false)} className="close" />
    </div>
  );
}

export default ViewSingleStory;
