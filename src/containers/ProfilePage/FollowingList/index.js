import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFollowingList } from "../../../actions";
import { GrClose } from "react-icons/gr";
import { generatPublicURL } from "../../../urlConfig";
import { NavLink } from "react-router-dom";
import "../FollowerList/style.css";

function FollowingList(props) {
  const dispatch = useDispatch();
  const followerFollowingList = useSelector(
    (state) => state.followerFollowingList
  );
  const { followingList } = followerFollowingList;

  useEffect(() => {
    dispatch(getFollowingList());
  }, [dispatch]);
  return (
    <div className="followerFollowingList">
      <div className="col">
        <h3>Following</h3>
        {followingList.map((_user) => {
          return (
            <NavLink to={`/u/${_user.userId.username}`} className="item">
              <div className="imgWrapper">
                <img
                  src={generatPublicURL(_user.userId.profilePic)}
                  alt={_user.userId.name}
                />
              </div>
              <div>
                <b>{_user.userId.username}</b> &nbsp;&nbsp;&nbsp; (
                {_user.userId.name})
              </div>
            </NavLink>
          );
        })}
      </div>
      <GrClose onClick={(e) => props.close(false)} className="close" />
    </div>
  );
}

export default FollowingList;
