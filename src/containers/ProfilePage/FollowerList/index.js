import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFollowerList } from "../../../actions/followerFollowingList.action";
import { GrClose } from "react-icons/gr";
import { generatPublicURL } from "../../../urlConfig";
import { NavLink } from "react-router-dom";
import "./style.css";

function FollowerList(props) {
  const dispatch = useDispatch();

  const followerFollowingList = useSelector(
    (state) => state.followerFollowingList
  );
  const { followerList } = followerFollowingList;

  useEffect(() => {
    dispatch(getFollowerList());
  }, [dispatch]);
  return (
    <div className="followerFollowingList">
      <div className="col">
        <h3>Followers</h3>
        {followerList.map((_user) => {
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

export default FollowerList;
