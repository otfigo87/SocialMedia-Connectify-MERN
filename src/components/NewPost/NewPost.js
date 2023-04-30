import {useState} from 'react';
import axios from 'axios';
import './NewPost.modules.css';

const NewPost = ({subject, user}) => {

    const [message, setMessage] = useState("");

    const handleForm = (e) => {
      e.preventDefault();

      axios.post("http://localhost:3001/post/", {
        message,
        author: user.firstName,
      });
      setMessage("");
    };

  return (
    <>
      <form onSubmit={(e) => handleForm(e)} className="new-post-container">
        <textarea
          placeholder="what's up ?"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        ></textarea>
        <input type="submit" value="Send" />
      </form>
    </>
  );
}

export default NewPost