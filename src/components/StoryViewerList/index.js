import React from "react";
import { GrClose } from "react-icons/gr";
import { generatPublicURL } from "../../urlConfig";
import { NavLink } from "react-router-dom";
import "./style.css";

function StoryViewerList(props) {
  return (
    <div className="storyViewerList">
      <div className="col">
        <h3>Views</h3>
        {props.list.map((_user) => {
          return (
            <NavLink to={`/u/${_user.username}`} className="item">
              <div className="imgWrapper">
                <img
                  src={generatPublicURL(_user.profilePic)}
                  alt={_user.username}
                />
              </div>
              <div>
                <b>{_user.username}</b>
              </div>
            </NavLink>
          );
        })}
      </div>
      <GrClose onClick={(e) => props.close(false)} className="close" />
    </div>
  );
}

export default StoryViewerList;
