import React from "react";
import axios from "axios";
import './DeletePost.css';

const DeletePost = ({ postId }) => {
    // console.log(postId)

  const handleDelete = () => {
    axios.delete("http://localhost:3001/post/" + postId);
    window.location.reload();
  };

  return (
    <span id="delete-btn" onClick={() => handleDelete()}>
      &#10010;
    </span>
  );
};

export default DeletePost;
