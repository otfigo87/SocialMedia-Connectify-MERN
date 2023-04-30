// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import DeletePost from "./DeletePost";
// import LikePost from "./LikePost";
// import { log, timeLog } from "console";

const Post = ({ post, user }) => {
//    console.log(post)
//   const [isAuthor, setIsAuthor] = useState(false);
//   const [isEdit, setIsEdit] = useState(false);
//   const [newMessage, setNewMessage] = useState("");

//   useEffect(() => {
//     if (post.author === userId) {
//       setIsAuthor(true);
//     } else {
//       setIsAuthor(false);
//     }
//   }, [userId]);

//   const handleEdit = () => {
//     if (newMessage) {
//       axios.put("http://localhost:5600/post/" + post._id, {
//         message: newMessage,
//       });
//     }
//   };

  const dateFormater = (date) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });
  };

  return (
    <div className="card">
      <div className="card-header">
        <h3>{post.author}</h3>
        <p>posted: {dateFormater(post.createdAt)}</p>
      </div>
      
    </div>
  );
};

export default Post;
