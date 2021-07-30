import React, { useState, useEffect } from "react";
import BrandLogo from "../BrandLogo";
import { NavLink } from "react-router-dom";
import avatar from "../../images/avatar.png";
import {
  AiOutlineHome,
  AiOutlineCompass,
  // AiOutlineHeart,
} from "react-icons/ai";
import { RiMessengerLine } from "react-icons/ri";
import { IoCloseOutline } from "react-icons/io5";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { generatPublicURL } from "../../urlConfig";
import { searchUser, userSelect } from "../../actions";
import socket from "../../socket";

function Navbar() {
  const [searchKey, setSearchKey] = useState("");
  // const [toggle, setToggle] = useState(true);
  const auth = useSelector((state) => state.auth);
  const search = useSelector((state) => state.search);
  const dispatch = useDispatch();

  useEffect(() => {
    if (searchKey) {
      dispatch(searchUser(searchKey));
    }
  }, [searchKey,dispatch]);

  return (
    <div className="navbar">
      <div className="brandLogoWrapper">
        <BrandLogo />
      </div>

      <div className="search">
        <input
          type="text"
          value={searchKey}
          name="Search"
          placeholder={"Search"}
          onChange={(e) => setSearchKey(e.target.value)}
        />
        {searchKey && (
          <IoCloseOutline
            className="cancelSearchBtn"
            onClick={(e) => setSearchKey("")}
          />
        )}
      </div>
      <div className="navRightMenu">
        <ul>
          <li>
            <NavLink to="/">
              <AiOutlineHome />
            </NavLink>
          </li>
          <li>
            <NavLink to="/inbox">
              <RiMessengerLine />
            </NavLink>
          </li>
          <li>
            <NavLink to="/explore">
              <AiOutlineCompass />
            </NavLink>
          </li>
          {/* <li>
            <NavLink to="/notification">
              <AiOutlineHeart />
            </NavLink>
          </li> */}
          <li>
            <NavLink to="/profile">
              <div className="profileImgContainer">
                <img
                  src={
                    auth.user.profilePic
                      ? generatPublicURL(auth.user.profilePic)
                      : avatar
                  }
                  alt="Go To Profile"
                />
              </div>
            </NavLink>
          </li>
        </ul>
      </div>

      {searchKey && (
        <div className="searchResult">
          <div className="userList">
            {search.users.length > 0 ? (
              search.users.map((_user) => {
                return (
                  <NavLink
                    to={`/u/${_user.username}`}
                    className="item"
                    key={_user._id}
                  >
                    <div className="imgWrapper">
                      <img
                        src={generatPublicURL(_user.profilePic)}
                        alt={_user.name}
                      />
                    </div>

                    <div>
                      <p>
                        <b>{_user.username}</b>
                      </p>
                      <p>
                        <small>{_user.name}</small>
                      </p>
                    </div>
                    {_user.username !== auth.user.username && (
                      <div className="msgBtn">
                        <NavLink
                          to="/inbox"
                          onClick={(e) => {
                            dispatch(userSelect(socket, _user.username));
                          }}
                        >
                          Message
                        </NavLink>
                      </div>
                    )}
                  </NavLink>
                );
              })
            ) : (
              <p style={{ textAlign: "center" }}>No user found</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
