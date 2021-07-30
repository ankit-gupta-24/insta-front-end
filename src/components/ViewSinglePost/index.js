import React, { useEffect, useState } from "react";
import { GrClose } from "react-icons/gr";
import { NavLink } from "react-router-dom";
import { generatPublicURL } from "../../urlConfig";
import { useSelector, useDispatch } from "react-redux";
import "./style.css";
import { getComments, postComments } from "../../actions";

function ViewSinglePost(props) {
  const [commentDesc, setCommentDesc] = useState("");

  const dispatch = useDispatch();
  const comment = useSelector((state) => state.comment);
  const postComment = () => {
    dispatch(postComments({ commentDesc, postId: props.post._id })).then(() => {
      setCommentDesc("");
    });
  };

  useEffect(() => {
    dispatch(getComments(props.post._id));
  }, [dispatch,props.post._id]);
  return (
    <div className="viewSinglePost">
      <div className="row">
        <div className="col1">
          <div className="imgWrapper">
            {props.post.photos.length > 0 ? (
              <img src={generatPublicURL(props.post.photos[0].img)} alt="" />
            ) : (
              <div>
                <h2>{props.post.title}</h2>
                <h4>{props.post.body}</h4>
              </div>
            )}
          </div>
          <div>
            <p>
              <b>{props.post.likedBy.length} Likes</b>
            </p>
            <p>
              {props.post.postedBy.username && (
                <NavLink
                  to={`/u/${props.post.postedBy.username}`}
                  style={{ color: "black" }}
                >
                  <b>{props.post.postedBy.username}</b>
                </NavLink>
              )}
              &nbsp;&nbsp;
              <i>{props.post.title}</i>
            </p>
          </div>
        </div>
        <div className="col2">
          <p>
            <b>Comments</b>
          </p>
          <ul className="allComments">
            {comment.comments.length > 0 ? (
              comment.comments.map((cmnt) => {
                return (
                  <li key={cmnt._id}>
                    <NavLink
                      to={`/u/${cmnt.userId.username}`}
                      className="cmntImgWrapper"
                    >
                      <img
                        src={generatPublicURL(cmnt.userId.profilePic)}
                        alt={cmnt.userId.username}
                      />
                    </NavLink>
                    <div>
                      <NavLink to={`/u/${cmnt.userId.username}`}>
                        <b>{cmnt.userId.username}</b>
                      </NavLink>
                      <i>{cmnt.commentDesc}</i>
                    </div>
                  </li>
                );
              })
            ) : (
              <p>
                <small>No Comment. Be the first to comment!</small>
              </p>
            )}
          </ul>
          <div className="commentForm">
            <input
              type="text"
              value={commentDesc}
              onChange={(e) => setCommentDesc(e.target.value)}
              placeholder="Drop a comment"
            />
            <button onClick={postComment}>Post</button>
          </div>
        </div>
      </div>

      <GrClose onClick={(e) => props.close(false)} className="close" />
    </div>
  );
}

export default ViewSinglePost;
