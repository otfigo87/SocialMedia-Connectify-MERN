import {useState} from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from './components/Login/LogInForm';
import SignUpForm from './components/SignUp/SignUpForm';
import Home from './components/Home/Home';

import { getUser } from './utilities/users-service';

import './App.css';

function App() {
  const [user, setUser] = useState(getUser());

  return (
    <>
      <Routes>
        {user ? (
          <>
            <Home user={user} setUser={setUser} />
          </>
        ) : (
          <>
            <Route path="/api/users" element={<SignUpForm setUser={setUser} />} />
            <Route path="/api/users/login" exact element={<LoginForm setUser={setUser} />} />
            <Route path="/" exact element={<Navigate replace to="/api/users/login" />}
            />
          </>
        )}
      </Routes>
    </>
  );
}

export default App;
