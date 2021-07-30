import React from "react";
import {
  AiOutlineEdit,
  AiOutlineUser,
  AiOutlineSetting,
  AiOutlineLogout,
  AiOutlineHistory,
} from "react-icons/ai";
import { FiPlusSquare } from "react-icons/fi";
import { RiCollageLine, RiGitRepositoryPrivateLine } from "react-icons/ri";
import { BsBookmarkPlus } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import "./style.css";
import { logout } from "../../../actions/";
import { useDispatch } from "react-redux";
import { IoArchiveOutline } from "react-icons/io5";

function SideNav(props) {
  const dispatch = useDispatch();
  const logoutUser = () => {
    dispatch(logout());
  };

  return (
    <div className="sidenav">
      <ul>
        <li>
          <NavLink to="/profile">
            <AiOutlineUser />
            <span className="menuTag">&nbsp;&nbsp;&nbsp;Profile</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile?q=edit">
            <AiOutlineEdit />
            <span className="menuTag">&nbsp;&nbsp;&nbsp;Edit Profile</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile?q=createNewPost">
            <FiPlusSquare />
            <span className="menuTag">&nbsp;&nbsp;&nbsp;Create New Post</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile?q=myPosts">
            <RiCollageLine />
            <span className="menuTag">&nbsp;&nbsp;&nbsp;My Posts</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile?q=saved">
            <BsBookmarkPlus />
            <span className="menuTag">&nbsp;&nbsp;&nbsp;Saved</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile?q=createStory">
            <AiOutlineHistory />
            <span className="menuTag">&nbsp;&nbsp;&nbsp;Create Story</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile?q=storyArchives">
            <IoArchiveOutline />
            <span className="menuTag">&nbsp;&nbsp;&nbsp;Story Archives</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile?q=settings">
            <AiOutlineSetting />
            <span className="menuTag">&nbsp;&nbsp;&nbsp;Settings</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile?q=privacy">
            <RiGitRepositoryPrivateLine />
            <span className="menuTag">&nbsp;&nbsp;&nbsp;Privacy</span>
          </NavLink>
        </li>
        <li onClick={logoutUser}>
          <span style={{ color: "red", cursor: "pointer" }}>
            <AiOutlineLogout />
            <span className="menuTag">&nbsp;&nbsp;&nbsp;Logout</span>
          </span>
        </li>
      </ul>
    </div>
  );
}

export default SideNav;
