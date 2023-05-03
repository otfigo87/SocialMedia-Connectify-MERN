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
  }, [user, post.likes]);

  const likePost = () => {
    axios.patch("http://localhost:3001/post/like-post/" + post._id, { userId: user._id });
    setUserLiked(true);
    // window.location.reload();
  };

  const dislikePost = () => {
    axios.patch("http://localhost:3001/post/dislike-post/" + post._id, { userId: user._id });
    setUserLiked(false);
    // window.location.reload();
  };
// console.log(post._id)
// console.log(user._id)
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
