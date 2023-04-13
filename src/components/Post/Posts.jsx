import React, { useEffect, useState } from "react";
import { collection,query, onSnapshot, orderBy } from "firebase/firestore";
import "./Post.css";
import db from "../../firebase";
import Post from "./Post";


const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const q = query(collection(db, 'posts'), orderBy('timestamp', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })));
    });
    return () => {
      unsubscribe();
    };
  }, []);
  

  return (
    <>
      {posts.map((items) => (
        <Post key={items.id} message={items.data.message} id={items.id} image={items.data.image} time={items.data.timestamp} setPosts={setPosts} posts={posts} />
))}
    </>
  );
};

export default Posts;
