import React, { useState } from "react";
import "./style.css";
import { useDispatch } from "react-redux";
import { AiFillDelete } from "react-icons/ai";
import { createStory } from "../../../actions";

function CreateStory() {
  const [photos, setPhotos] = useState([]);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    const form = new FormData();

    if (photos.length > 0) {
      for (let photo of photos) {
        form.append("photos", photo);
      }
    }

    dispatch(createStory(form)).then(() => {
      setPhotos([]);
    });
  };
  return (
    <div className="createStory">
      <h1 style={{ textAlign: "center" }}>Create Story</h1>
      <div className="createStoryForm">
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

        <button onClick={handleSubmit}>SHARE</button>
      </div>
    </div>
  );
}

export default CreateStory;
