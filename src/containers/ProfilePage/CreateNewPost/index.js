import React, { useState } from "react";
import "./style.css";
import { useDispatch } from "react-redux";
import { createPost } from "../../../actions";
import { AiFillDelete } from "react-icons/ai";

function CreateNewPost(props) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [photos, setPhotos] = useState([]);

  const dispatch = useDispatch();

  const handleSubmit = () => {
    const form = new FormData();
    form.append("title", title);
    form.append("body", body);

    if (photos.length > 0) {
      for (let photo of photos) {
        form.append("photos", photo);
      }
    }

    dispatch(createPost(form)).then(() => {
      setTitle("");
      setBody("");
      setPhotos([]);
    });
  };

  return (
    <div className="createPost">
      <h1 style={{ textAlign: "center" }}>Create New Post</h1>
      <div className="createPostForm">
        <textarea
          rows=""
          cols=""
          name="title"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          rows=""
          cols=""
          name="body"
          placeholder="Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <input
          type="file"
          name="photos"
          multiple={true}
          onChange={(e) => {
            setPhotos(photos.concat([...e.target.files]));
            e.target.value = null;
          }}
        />
        {photos.length > 0 && (
          <>
            <p>
              <b>{photos.length} File(s) selected</b>
              <AiFillDelete
                color={"red"}
                style={{ cursor: "pointer" }}
                onClick={() => setPhotos([])}
              />
            </p>
            <ol>
              {photos.map((photo, index) => {
                return <li key={photo.name}>{photo.name}</li>;
              })}
            </ol>
          </>
        )}
        <button onClick={handleSubmit}>POST</button>
      </div>
    </div>
  );
}

export default CreateNewPost;
