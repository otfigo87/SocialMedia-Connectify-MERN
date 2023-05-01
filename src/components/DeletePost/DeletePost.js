import React from "react";
import axios from "axios";
import './DeletePost.css';

const DeletePost = ({ postId }) => {
    // console.log(postId)

  const handleDelete = () => {
    axios.delete("http://localhost:3100/post/" + postId);
  };

  return (
    <span id="delete-btn" onClick={() => handleDelete()}>
      &#10010;
    </span>
  );
};

export default DeletePost;
