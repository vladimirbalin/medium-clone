import { Link } from "react-router-dom";
import React from "react";
import FormInput from "components/form-input";

const SignUp = ({ handleSubmit, handleChange, username, email, password, isFetching }) => {
  return <div className="col-md-6 offset-md-3 cols-xs-12">
    <h1 className='text-xs-center'>Registration</h1>
    <p className="text-xs-center">
      <Link to='/login'>Have an account?</Link>
    </p>
    <form onSubmit={handleSubmit}>
      <fieldset>
        <FormInput value={username}
                   onChange={handleChange}
                   type="text"
                   placeholder='Username'/>
        <FormInput value={email}
                   onChange={handleChange}
                   type="email"
                   placeholder='Email'/>
        <FormInput value={password}
                   onChange={handleChange}
                   type="password"
                   placeholder='Password'/>

        <button className="btn btn-lg btn-primary pull-xs-right"
                type='submit'
                disabled={isFetching}>
          Sign-up
        </button>
      </fieldset>
    </form>
  </div>
}

export default SignUp;