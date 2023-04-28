import { useState } from 'react';
import {login} from '../../utilities/users-service';
import { Link } from "react-router-dom";
import styles from "./styles.module.css";


export default function LoginForm({ setUser }) {

const [credentials, setCredentials] = useState({
  email: '',
  password: ''
});

const [error, setError] = useState('');

function handleChange(evt) {
  setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
  setError('');
}

async function handleSubmit(evt) {
  // Prevent form from being submitted to the server
  evt.preventDefault();
  try {
    // The promise returned by the signUp service method
    // will resolve to the user object included in the
    // payload of the JSON Web Token (JWT)
    const user = await login(credentials);
    console.log(user);
    setUser(user);
  } catch {
    setError('Log In Failed - Try Again');
  }
}

return (
  <div className={styles.login_container}>
    <div className={styles.login_form_container}>
      <div className={styles.left}>
        <form className={styles.form_container} onSubmit={handleSubmit}>
          <h2>Connectify</h2>
          <h1>Login to Your Account</h1>
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleChange}
            value={credentials.email}
            required
            className={styles.input}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            value={credentials.password}
            required
            className={styles.input}
          />
          {error && <div className={styles.error_msg}>{error}</div>}
          
            <button type="submit" className={styles.green_btn}>
              Sign In
            </button>
        </form>
      </div>
      <div className={styles.right}>
        <h1>New Member ?</h1>
        <Link to="/signup">
          <button type="button" className={styles.white_btn}>
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  </div>
);
}