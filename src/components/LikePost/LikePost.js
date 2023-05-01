import React, { useEffect, useState } from "react";
import axios from "axios";
import "./LikePost.css";

const LikePost = ({ post, user }) => {
    
  const [userLiked, setUserLiked] = useState(false);

  useEffect(() => {
    if (post.likes) {
      if (post.likes.includes(user._id)) {
        setUserLiked(true);
      } else {
        setUserLiked(false);
      }
    }
  }, [user]);

  const likePost = () => {
    axios.patch("http://localhost:3001/post/like-post/" + post._id, { likes: user._id });
    setUserLiked(true);
  };

  const dislikePost = () => {
    axios.patch("http://localhost:3001/post/dislike-post/" + post._id, { likes: user._id });
    setUserLiked(false);
  };
console.log(post._id)
console.log(user._id)
  return (
    <div className="like-icon">
      <p>{post.likes ? post.likes.length : 0}</p>
      {userLiked ? (
        <span id="like-btn" onClick={() => dislikePost()}>
          &#9829;
        </span>
      ) : (
        <span id="dislike-btn" onClick={() => likePost()}>
          &#9829;
        </span>
      )}
    </div>
  );
};

export default LikePost;
