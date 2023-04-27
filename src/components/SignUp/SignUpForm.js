import styles from './styles.module.css';
import { useState } from "react";
import { Link } from "react-router-dom";
import {signUp} from '../../utilities/users-service';

function SignUpForm({setUser}) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    error: "",
  });


  const handleSubmit = async (e) => { 
    e.preventDefault(); 
    try {
      // console.log(formData)
      const userData = { // data to be send to the backend to create a new user
        firstName: formData.firstName,
        lastName: formData.lastName,
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
    <div className={styles.signUp_container}>
      <div className={styles.signUp_form_container}>
        <div className={styles.left}>
          <h1>Welcome to Connectify</h1>
          <Link to="/api/users/login">
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
              <h4>{formData.error}</h4>
            )}
            <button
              type="submit"
              className={styles.green_btn}
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;
