import React from 'react';

import './form-input.styles.scss';

const FormInput = (props) =>  {
    
    const { handleChange, label, errorMessage } = props;
    const error = errorMessage ? 'login-error' : ''

    return (
    <div className='group'>
            <input className={`form-input ${error}`} onChange={handleChange} {...props} />
        {label ? (
            //Append 'shrink' to class name and move placeholder up top if there is user input in input field
            <label className={`${props.value.length ? 'shrink' : ''} form-input-label`}>
                {label}
            </label>
        ) : null}
    </div>
);
}

export default FormInput;

