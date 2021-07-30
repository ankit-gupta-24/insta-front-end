import React, { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { HiArrowsExpand } from "react-icons/hi";
import { generatPublicURL } from "../../urlConfig";
import { useDispatch } from "react-redux";
import { deletePost, unsavePost } from "../../actions";
import ViewSinglePost from "../ViewSinglePost";
import { BsBookmarkDash } from "react-icons/bs";
import "./style.css";

function ProfilePostCard(props) {
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();

  const renderViewPostModal = () => {
    return <ViewSinglePost post={props.post} close={setShow} />;
  };

  const deleteThisPost = () => {
    dispatch(deletePost(props.post._id));
  };
  const unsaveThisPost = () => {
    dispatch(unsavePost(props.post._id));
  };

  const viewThisPost = () => {
    setShow(true);
  };

  return (
    <>
      <div className="profilePostCard">
        {props.post.photos.length > 0 ? (
          <div className="imgWrapper">
            <img
              src={generatPublicURL(props.post.photos[0].img)}
              alt={props.post.title}
            />
          </div>
        ) : (
          <div className="textPost">
            <h2>{props.post.title}</h2>
            <h4>{props.post.body}</h4>
          </div>
        )}

        <div className="postDeleteBtn">
          <HiArrowsExpand onClick={viewThisPost} />
          {props.deleteBtn && <AiOutlineDelete onClick={deleteThisPost} />}
          {props.unsaveBtn && (
            <BsBookmarkDash onClick={unsaveThisPost} color="red" />
          )}
        </div>
      </div>
      {show && renderViewPostModal()}
    </>
  );
}

export default ProfilePostCard;
