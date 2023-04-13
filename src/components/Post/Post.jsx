import React, { useState } from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import SendIcon from "@mui/icons-material/Send";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { deleteDoc, doc } from "firebase/firestore";
import db from "../../firebase";

const Post = ({ message, image, time, id ,setposts,posts }) => {
  const [value, setValue] = useState(false);

  const deleteClick = async(postId) => {
    await deleteDoc(doc(db, "posts", postId))
    setposts(posts.filter(post =>post.id !==id));
  }
 

  return (
    <div className="post__box">
      <div className="post__top">
        <div className="post__left">
          <AccountCircleIcon fontSize="large" />{" "}
          <strong style={{ alignItems: "center" }}>Guest</strong>
          <div className="timestamp">
            {new Date(time?.toDate()).toUTCString()}
          </div>
        </div>

        <div className="post__button">
          <button
            onClick={() => setValue(!value)}
          >
            ...
          </button>
          {value && (
            <div className="post__options">
              <button value="edit">Edit</button>
              <button onClick={() => deleteClick(id)} value="options">Delete</button>
            </div>
          )}
        </div>
      </div>
      <div className="post__middle">
        <div className="message" style={{ padding: "18px" }}>
          {message}
        </div>
        <div className="image">
          <img src={image} alt="" />
        </div>
      </div>
      <div className="post__bottom" style={{ display: "flex" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <ThumbUpIcon style={{ color: "lightblack" }} /> like
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <ChatBubbleOutlineIcon style={{ color: "lightblack" }} /> Chat
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <SendIcon style={{ color: "lightblack" }} /> Share
        </div>
      </div>
    </div>
  );
};

export default Post;
