import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginForm from "./components/Login/LogInForm";
import SignUpForm from "./components/SignUp/SignUpForm";
import Home from "./components/Home/Home";

import { getUser } from "./utilities/users-service";

function App() {

  const [user, setUser] = useState(getUser());
  // console.log(user);

  return (
    <>
      {user ? (
        <Routes>
          <Route
            path="/"
            exact
            element={<Home user={user} setUser={setUser} />}
          />
        </Routes>
      ) : (
        <Routes>
          <Route
            path="/signup"
            exact
            element={<SignUpForm setUser={setUser} />}
          />
          <Route path="/" exact element={<LoginForm setUser={setUser} />} />
          <Route path="/*" exact element={<Navigate replace to="/" />} />
        </Routes>
      )}
    </>
  );
  
}

export default App;
