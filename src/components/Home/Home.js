import React from 'react';
import styles from "./styles.module.css";
import { logOut } from "../../utilities/users-service";

const Home = ({user, setUser}) => {
    const handleLogOut = () => {
      logOut();
      setUser(null);
      window.location.reload();
    };
  return (
    <div className={styles.main_container}>
      <nav className={styles.navbar}>
        <h1>
          Connectify <span>Welcome, {user.firstName}</span>
        </h1>
        <button className={styles.white_btn} onClick={handleLogOut}>
          Logout
        </button>
      </nav>
    </div>
  );
}

export default Home