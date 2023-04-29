import React, { useState } from "react";
import styles from "./styles.module.css";
import { logOut } from "../../utilities/users-service";
import { Link } from "react-router-dom";
import NewPost from "../../components/NewPost";
import Thread from "../../components/Thread";

const Home = ({ user, setUser }) => {
  const handleLogOut = () => {
    logOut();
    setUser(null);
    // window.location.reload();
  };

  const [subject, setSubject] = useState("");
  return (
    <div className={styles.main_container}>
      <nav className={styles.navbar}>
        <h1>
          Connectify <span>Welcome, {user.firstName}</span>
        </h1>
        <button className={styles.white_btn}>News</button>
        <button className={styles.white_btn}>Events</button>
        <Link to="/">
          <button className={styles.white_btn} onClick={handleLogOut}>
            Logout
          </button>
        </Link>
      </nav>

      <div>
        <h3>
          Hello {user.firstName} {user.lastName}!
        </h3>
        <input
          type="text"
          placeholder="Post Title..."
          onChange={(e) => setSubject(e.target.value)}
        />

        <NewPost subject={subject} user={user}/>
        <Thread user={user}/> 
      </div>
    </div>
  );
};

export default Home;
