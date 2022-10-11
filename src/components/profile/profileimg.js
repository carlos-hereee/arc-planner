import React, { useRef, useState, useContext } from "react";

import { KingdomContext } from "../../utils/context/Kingdom/KingdomContext";

export default function ProfileImg() {
  const { addImg, profile, updateProfile } = useContext(KingdomContext);

  const [inputChanged, setInputChange] = useState(false);
  const [imgToggle, setImgToggle] = useState(false);
  const [data, setData] = useState({
    inGameName: profile.inGameName,
    city: profile.city,
    castle: profile.city,
  });

  const uploadedImage = useRef(null);
  const imageUpLoader = useRef(null);

  function imgClick() {
    imageUpLoader.current.click();
  }

  function inputChange(e) {
    const { name, value } = e.target;
    setInputChange(true);
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }
  function saveData() {
    updateProfile(data);
    setInputChange(false);
  }
  function handleChange(e) {
    setImgToggle(true);
    const [file] = e.target.files;
    if (file) {
      const reader = new FileReader();
      const { current } = uploadedImage;
      current.file = file;
      reader.onload = (e) => {
        current.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    let formData = new FormData();
    formData.append("avatars", uploadedImage.current.file);
    addImg(formData);
    setImgToggle(false);
  }

  return (
    <div className="wrapper">
      <form encType="multipart/form-data" onSubmit={handleSubmit}>
        <input
          type="file"
          name="avatars"
          onChange={handleChange}
          ref={imageUpLoader}
          style={{ display: "none" }}
        />
        <img
          src={`${process.env.REACT_APP_DB_BASE_URL}/${
            profile.path && profile.path.replace("\\", "/")
          }`}
          className="headshot"
          ref={uploadedImage}
          alt={profile.originalname}
          onClick={imgClick}
        />
        {imgToggle ? (
          <>
            <button type="submit" className="inputSave" />
          </>
        ) : (
          ""
        )}
      </form>
      <div className="field">
        <div>GOVERNOR NAME: </div>
        <input
          key={profile.inGameName}
          className="input"
          defaultValue={profile.inGameName}
          name="inGameName"
          onChange={(e) => inputChange(e)}
        />
      </div>
      <div className="field">
        <div>CITY HALL: </div>
        <input
          key={profile.city}
          className="input"
          defaultValue={profile.city}
          name="city"
          onChange={(e) => inputChange(e)}
        />
      </div>
      <div className="field">
        <div>CASTLE: </div>
        <input
          key={profile.castle}
          className="input"
          defaultValue={profile.castle}
          name="castle"
          onChange={(e) => inputChange(e)}
        />
      </div>
      {inputChanged ? (
        <div className="btn" onClick={saveData}>
          <p>SAVE</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
