import React, { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./MessageSender.css";
import VideocamIcon from "@mui/icons-material/Videocam";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import db from "../../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const MessageSender = () => {
  const [text, setText] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const docRef = addDoc(collection(db, "posts"), {
      message: text,
      image: image,
      timestamp: serverTimestamp(),
    });
    setText("");
    setImage("");
  };

  return (
    <div className="messageSender__box">
      <div className="messageSender__top">
        <AccountCircleIcon fontSize="large" />

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={text}
            placeholder="What's in your mind here "
            onChange={(e) => setText(e.target.value)}
          />
          <input
            type="text"
            value={image}
            className="url"
            placeholder="Entere Url of image"
            onChange={(e) => setImage(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      <hr style={{ backgroundColor: "gray" }} />
      <div className="messageSender__bottom">
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <VideocamIcon style={{ color: "red" }} />
          Live Videos{" "}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <AddToPhotosIcon style={{ color: "green" }} /> Photos/Videos
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <EmojiEmotionsIcon style={{ color: "orange" }} /> Feeling/Activity
        </div>
      </div>
    </div>
  );
};

export default MessageSender;
