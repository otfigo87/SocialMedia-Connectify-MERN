import styles from './styles.module.css';
import { useState } from "react";
import { Link } from "react-router-dom";
import {signUp} from '../utilities/users-service';

function SignUpForm({setUser}) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirm: "",
    error: "",
  });

  const disable = formData.password !== formData.confirm;

  const handleSubmit = async (e) => { 
    e.preventDefault(); 
    try {
      // console.log(formData)
      const userData = { // data to be send to the backend to create a new user
        name: formData.name,
        email: formData.email,
        password: formData.password,
      };
      // returns a token with the user info
      const user = await signUp(userData); // user service
      setUser(user);

    } catch (error) {
      setFormData({...formData, error: "Sign Up Failed - Try Again"})
    }
};

  const handleChange = (evt) => {
    setFormData({...formData, [evt.target.name]: evt.target.value, error: ''})
  };

  return (
    <div className={styles.signup_container}>
      <div className={styles.signup_form_container}>
        <div className={styles.left}>
          <h1>Welcome Back</h1>
          <Link to="/login">
            <button type="button" className={styles.white_btn}>
              Sign in
            </button>
          </Link>
        </div>
        <div className={styles.right}>
          <form className={styles.form_container} onSubmit={handleSubmit}>
            <h1>Create Account</h1>
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              onChange={handleChange}
              value={formData.firstName}
              required
              className={styles.input}
            />
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              onChange={handleChange}
              value={formData.lastName}
              required
              className={styles.input}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={formData.email}
              required
              className={styles.input}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={formData.password}
              required
              className={styles.input}
            />
            {formData.error && (
              <div className={styles.error_msg}>{formData.error}</div>
            )}
            <button
              type="submit"
              className={styles.green_btn}
              disabled={disable}
            >
              Sing Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;
