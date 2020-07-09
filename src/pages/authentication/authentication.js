import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useFetch } from "hooks/useFetch";

const Authentication = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [{ response, isLoading, error }, doFetch] = useFetch('users/login');

  const handleChange = (event) => {
    const { type, value } = event.target;
    if (type === 'email') {
      setEmail(value)
    } else if (type === 'password') {
      setPassword(value)
    }
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    doFetch({user: {email, password}});
  }

  return <div className='auth-page'>
    <div className="container page">
      <div className="row">
        <div className="col-md-6 offset-md-3 cols-xs-12">
          <h1 className='text-xs-center'>Login</h1>
          <p className="text-xs-center">
            <Link to='/registration'>Need an account?</Link>
          </p>
          <form onSubmit={handleSubmit}>
            <fieldset>
              <fieldset className="form-group">
                <input value={email}
                       onChange={handleChange}
                       type="email"
                       className='form-control form-control-lg'
                       placeholder='Email'/>
              </fieldset>
              <fieldset className="form-group">
                <input value={password}
                       onChange={handleChange}
                       type="password"
                       className='form-control form-control-lg'
                       placeholder='Password'/>
              </fieldset>
              <button className="btn btn-lg btn-primary pull-xs-right"
                      type='submit'
                      disabled={isLoading}>
                Sign-in
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div>
}

export default Authentication;