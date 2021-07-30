import React, { useEffect, useState } from "react";
import { AiFillHeart, AiOutlineComment, AiOutlineHeart } from "react-icons/ai";
import { BsBookmarkFill, BsBookmarkPlus } from "react-icons/bs";
// import CustomInput from "../../components/CustomInput";
import avatar from "../../images/avatar.png";
import { generatPublicURL } from "../../urlConfig";
import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import { NavLink } from "react-router-dom";
import {
  followOtherUser,
  likePost,
  unfollowOtherUser,
  unlikePost,
  savePost,
  unsavePost,
} from "../../actions";
import ViewSinglePost from "../ViewSinglePost";

function PostCard(props) {
  const [show, setShow] = useState(false);

  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const followUser = () => {
    dispatch(followOtherUser(props.post.postedBy._id));
  };
  const unfollowUser = () => {
    dispatch(unfollowOtherUser(props.post.postedBy._id));
  };
  const likeThisPost = () => {
    dispatch(likePost(props.post._id));
  };
  const unlikeThisPost = () => {
    dispatch(unlikePost(props.post._id));
  };
  const saveThisPost = () => {
    dispatch(savePost(props.post._id));
  };
  const unsaveThisPost = () => {
    dispatch(unsavePost(props.post._id));
  };
  const renderViewPostModal = () => {
    return <ViewSinglePost post={props.post} close={setShow} />;
  };
  const viewThisPost = () => {
    setShow(true);
  };

  useEffect(() => {}, []);

  return (
    <>
      <div className="postCard">
        <div className="postHeader">
          <NavLink to={`/u/${props.post.postedBy.username}`}>
            <div>
              <div className="imgWrapper">
                <img
                  src={
                    props.post.postedBy.profilePic
                      ? generatPublicURL(props.post.postedBy.profilePic)
                      : avatar
                  }
                  alt="P"
                />
              </div>
              <div className="postUser">{props.post.postedBy.username}</div>
            </div>
          </NavLink>
          {props.post.postedBy._id ===
          auth.user._id ? null : auth.user.following.reduce((prev, obj) => {
              return prev || obj.userId === props.post.postedBy._id;
            }, false) ? (
            <div className="postMenu" onClick={unfollowUser}>
              Unfollow
            </div>
          ) : (
            <div className="postMenu" onClick={followUser}>
              Follow
            </div>
          )}
        </div>
        <div className="postBody">
          {props.post.photos.length > 0 ? (
            <img src={generatPublicURL(props.post.photos[0].img)} alt="" />
          ) : (
            <div>
              <h2>{props.post.title}</h2>
              <h4>{props.post.body}</h4>
            </div>
          )}
        </div>
        <div className="postFooter">
          <div className="postFooterBtnWrapper">
            <div>
              {props.post.likedBy &&
              props.post.likedBy.reduce((prev, obj) => {
                return prev || obj.userId === auth.user._id;
              }, false) ? (
                <AiFillHeart onClick={unlikeThisPost} color="red" />
              ) : (
                <AiOutlineHeart onClick={likeThisPost} />
              )}
              <AiOutlineComment onClick={viewThisPost} />
            </div>
            {auth.user.savedPosts &&
            auth.user.savedPosts.reduce((prev, obj) => {
              return prev || obj.postId === props.post._id;
            }, false) ? (
              <BsBookmarkFill onClick={unsaveThisPost} color="black" />
            ) : (
              <BsBookmarkPlus onClick={saveThisPost} />
            )}
          </div>
          <div className="postTagline">
            <p>
              <b>{props.post.postedBy.username} </b>
              {props.post.title}
            </p>
            <p style={{ textAlign: "justify" }}>
              <small>{props.post.body}</small>
            </p>
          </div>
          <div className="postCommentSection">
            <p>
              <small>
                <b onClick={viewThisPost} style={{ cursor: "pointer" }}>
                  View All Comments
                </b>
              </small>
            </p>
          </div>
        </div>
      </div>
      {show && renderViewPostModal()}
    </>
  );
}

export default PostCard;
