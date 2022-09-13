import React from 'react';
import './ErrorMessage.css';

const ErrorMessage = (props) => {

    const getOutFromErrorHandler = () => {
        props.onExitErrorBox(true);
        props.onErrorComponentsRender('#1f1f1f');
    };
    
    return (
        <div className='error-controls'>
            <div className='invaild_input'>
                <h2>Invalid Input</h2>
            </div>
            <div className='error-message'>
              <h4>{props.errorMessage}</h4>   
            </div>
            <div className='error-button'>
                <button type='button' onClick={getOutFromErrorHandler}>OKay</button>
            </div>
        </div>
    )
};
export default ErrorMessage;