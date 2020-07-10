import React from "react";

const FormInput = (props) => {

  return (
    <fieldset className="form-group">
      <input {...props}
             className='form-control form-control-lg'
      />
    </fieldset>)
}

export default FormInput;