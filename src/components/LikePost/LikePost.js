import axios from 'axios';
import React, { useEffect, useState } from "react";

const LikePost = ({post, user}) => {

    const [userLiked, setUserLiked] = useState(false);

    useEffect(() => {
      if (post.likes) {
        if (post.likes.includes(user)) {
          setUserLiked(true);
        } else {
          setUserLiked(false);
        }
      }
    }, [user]);

    const likePost = () => {
      axios.patch("http://localhost:3001/post/like-post/" + post._id, { user });
    //   console.log(user)
      setUserLiked(true);
    };

  return (
    <div className="like-icon">
        <p>{post.likes ? post.likes.length : 0}</p>
        <span id="dislike-btn" onClick={() => likePost()} >&#9829;</span>
    </div>
  )
}

export default LikePost