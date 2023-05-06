import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginForm from "./components/Login/LogInForm";
import SignUpForm from "./components/SignUp/SignUpForm";
import Home from "./pages/Home/Home";
import Events from "./pages/Events/Events";
import News from "./pages/News/News";
import "./App.css";

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
          <Route path="/events" exact element={<Events setUser={setUser} />} />
          <Route path="/news" exact element={<News setUser={setUser} />} />
          <Route path="/*" exact element={<Navigate replace to="/" />} />
        </Routes>
      ) : (
        <Routes>
          <Route
            path="/signUp"
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
