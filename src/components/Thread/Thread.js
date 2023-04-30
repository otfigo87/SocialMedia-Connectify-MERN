import React, { useEffect, useState } from "react";
import axios from "axios";
import Post from "../Post/Post";
import styles from "./Thread.module.css";

const Thread = ({ user }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/post/")
    .then((res) => setPosts(res.data));
  }, []);
  // console.log(posts)
  // console.log(user)

  return (
    <div className={styles.thread_container}>
      {posts
        .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
        .map((post) => (
          <Post key={post._id} post={post} user={user} />
        ))}
    </div>
  );
};

export default Thread;
