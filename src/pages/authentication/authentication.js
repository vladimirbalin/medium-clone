import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useFetch } from "hooks/useFetch";
import SignIn from "components/sign-in";
import SignUp from "components/sign-up";

const Authentication = ({ match, history, location }) => {
  const isLoginPage = location.pathname === '/login';
  const apiUrl = isLoginPage ? 'users/login' : 'users'

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [{ response, isFetching, error }, doFetch] = useFetch(apiUrl);

  const handleChange = (event) => {
    const { type, value } = event.target;
    if (type === 'email') {
      setEmail(value)
    } else if (type === 'password') {
      setPassword(value)
    } else if (type === 'text') {
      setUsername(value)
    }
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = isLoginPage ? { email, password } : { email, password, username }
    doFetch({
      method: 'post',
      data: {
        user: formData
      }
    });
  }

  return <div className='auth-page'>
    <div className="container page">
      <div className="row">
        {isLoginPage ?
          <SignIn handleSubmit={handleSubmit}
                  handleChange={handleChange}
                  email={email}
                  password={password}
                  isFetching={isFetching}/>
          :
          <SignUp handleSubmit={handleSubmit}
                  handleChange={handleChange}
                  username={username}
                  email={email}
                  password={password}
                  isFetching={isFetching}/>}
      </div>
    </div>
  </div>
}

export default Authentication;