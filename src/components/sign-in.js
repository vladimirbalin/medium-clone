import { Link } from "react-router-dom";
import React from "react";
import FormInput from "components/form-input";

const SignIn = ({ handleSubmit, handleChange, email, password, isFetching }) => {
  return <div className="col-md-6 offset-md-3 cols-xs-12">
    <h1 className='text-xs-center'>Login</h1>
    <p className="text-xs-center">
      <Link to='/registration'>Need an account?</Link>
    </p>
    <form onSubmit={handleSubmit}>
      <fieldset>
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
          Sign-in
        </button>
      </fieldset>
    </form>
  </div>
}

export default SignIn;