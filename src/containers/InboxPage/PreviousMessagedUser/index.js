import React from "react";
import { userSelect } from "../../../actions";
import { useDispatch } from "react-redux";
import { generatPublicURL } from "../../../urlConfig";

function PreviousMessagedUsers(props) {
  const dispatch = useDispatch();
  return (
    <div
      className="userListItem"
      onClick={() => dispatch(userSelect(props.socket, props.user.username))}
    >
      <div className="imgWrapper">
        <img
          src={generatPublicURL(props.user.profilePic)}
          alt={"profile pic"}
        />
      </div>
      <div>{props.user.username}</div>
    </div>
  );
}

export default PreviousMessagedUsers;
