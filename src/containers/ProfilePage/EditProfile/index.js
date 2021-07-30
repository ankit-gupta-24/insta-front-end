import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { generatPublicURL } from "../../../urlConfig";
import avatar from "../../../images/avatar.png";
import "./style.css";
import { updateMyProfile } from "../../../actions/";

function EditProfile(props) {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const [username, setUsername] = useState(auth.user.username);
  const [name, setName] = useState(auth.user.name);
  const [bio, setBio] = useState(auth.user.bio);
  const [profilePic, setProfilePic] = useState(null);

  const handleSubmit = () => {
    const form = new FormData();
    form.append("username", username);
    form.append("name", name);
    form.append("bio", bio);
    if (profilePic) {
      form.append("profilePic", profilePic);
    }

    dispatch(updateMyProfile(form));
  };
  return (
    <div className="editProfile">
      <h1>Edit Profile</h1>
      <div className="imgWrapper">
        <img
          src={
            auth.user.profilePic
              ? generatPublicURL(auth.user.profilePic)
              : avatar
          }
          alt={auth.user.name}
        />
      </div>
      <p>
        <label>Change Picture</label>
        <input
          type="file"
          name="profilePic"
          onChange={(e) => {
            setProfilePic(e.target.files[0]);
          }}
        />
      </p>
      <p>
        <label>Username</label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
      </p>
      <p>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
      </p>
      <p>
        <label>Bio</label>
        <textarea
          rows=""
          cols=""
          name="bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          placeholder="Bio"
        />
      </p>

      <p>
        <button onClick={handleSubmit}>Save</button>
      </p>
    </div>
  );
}

export default EditProfile;
