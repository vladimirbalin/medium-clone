import React, { useContext, useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { useFetch } from "hooks/useFetch";
import SignIn from "components/sign-in";
import SignUp from "components/sign-up";
import { useLocalStorage } from "hooks/useLocalStorage";
import { CurrentUserContext } from "context/currentUser";

const Authentication = ({ match, history, location }) => {
  const isLoginPage = location.pathname === '/login';
  const apiUrl = isLoginPage ? 'users/login' : 'users'

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [successfulSubmit, setSuccessfulSubmit] = useState(false);
  const [{ response, isFetching, error }, doFetch] = useFetch(apiUrl);
  const [token, setToken] = useLocalStorage('token');
  const [currentUserState, setCurrentUserState] = useContext(CurrentUserContext);
  console.log(currentUserState, setCurrentUserState)
  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'email') {
      setEmail(value)
    } else if (name === 'password') {
      setPassword(value)
    } else if (name === 'username') {
      setUsername(value)
    }
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = isLoginPage ? { email, password } : { email, password, username }
    doFetch({
      method: 'post',
      data: {
        user: formData
      }
    });
  }
  useEffect(() => {
    if(!response){
      return
    }
    setToken(response.user.token);
    setSuccessfulSubmit(true);
    setCurrentUserState(state => ({
      ...state,
      isLoading: false,
      isLoggedIn: true,
      currentUser: response.user
    }))
  }, [response, setToken])

  if(successfulSubmit){
    return <Redirect to='/' />
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