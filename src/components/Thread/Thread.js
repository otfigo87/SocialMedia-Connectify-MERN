import React, { useEffect, useState } from "react";
import axios from "axios";
import Post from "../Post/Post";

const Thread = ({ user }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/post/")
    .then((res) => setPosts(res.data));
  }, []);
  console.log(posts)

  return (
    <div className="thread-container">
      
      {posts
        // .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
        .map((post) => (  
          <Post key={post._id} post={post} user={user} />
        ))}
    </div>
  );
};

export default Thread;
