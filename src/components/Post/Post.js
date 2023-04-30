// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import DeletePost from "./DeletePost";
import LikePost from "../LikePost/LikePost";
// import { log, timeLog } from "console";
import styles from  "./Post.module.css";

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
    <div className={styles.card}>
      <div className={styles.card_header}>
        <h3>{post.author}</h3>
        <p>posted: {dateFormater(post.createdAt)}</p>
      </div>
      <div className={styles.icons_part}>
        <LikePost post={post} user={user} />
      </div>  
      {/* {isEdit ? (
        <div className="edit-container">
          <textarea
            defaultValue={newMessage ? newMessage : post.message}
            onChange={(e) => setNewMessage(e.target.value)}
          ></textarea>
          <button
            onClick={() => {
              handleEdit();
              setIsEdit(false);
            }}
          >
            Valider édition
          </button>
        </div>
      ) : (
        <p>{newMessage ? newMessage : post.message}</p>
      )} */}
      {/* <div className="icons-part">
        <LikePost post={post} user={user} />
        {isAuthor && (
          <div className="update-delete-icons">
            <span
              id="update-btn"
              onClick={() => {
                handleEdit();
                setIsEdit(!isEdit);
              }}
            >
              &#10000;
            </span>
            <DeletePost postId={post._id} />
          </div>
        )}
      </div> */}
    </div>
  );
};

export default Post;
