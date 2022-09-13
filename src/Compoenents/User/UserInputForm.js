import React, { useState, useEffect } from 'react';
import ErrorMessage from './ErrorMessage';
import  ReactDOM  from 'react-dom';
import './UserInputForm.css'
const UserInputForm = (props) => {
    const [userName, setUserName] = useState('');
    const [userAge, setUserAge] = useState('');
    const [isAddValue, setIsAddValue] = useState(true);
    const [errorMessage, seterrorMessage] = useState(true);


    const NameHandleChange = (e) => {
        setUserName(e.target.value)
    };

    const ageHandleChange = (e) => {
        setUserAge(e.target.value)
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (userName.trim().length === 0 || userAge.trim().length === 0) {
            setIsAddValue(false);

            seterrorMessage('please enter vaild name and age ');
            props.onErrorComponentsRender('rgba(0, 0, 0, 0.75)')
            return;
        }

        if (userAge <= 0 || isNaN(userAge) || userAge > 80) {
            setIsAddValue(false);
            seterrorMessage('please enter vaild age');
            props.onErrorComponentsRender('rgba(0, 0, 0, 0.75)')
            return;
        }

      
     
        const userData = {
            userName: userName.charAt(0).toUpperCase() + userName.slice(1),
            userAge: userAge
        }
        props.onGetDataHandler(userData);
        props.onErrorComponentsRender('#1f1f1f');
        setIsAddValue(true);
        setUserName(''); setUserAge('');
    };

    const exitErrorBoxHandler = (backToForm) => {
        setIsAddValue(backToForm);
    };



    return (
        <React.Fragment>
            <div className='form-control'>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Username</label>
                        <input type="text" name='userName' value={userName} onChange={NameHandleChange} />
                    </div>
                    <div>
                        <label>Age (year)</label>
                        <input type="text" name='userAge' value={userAge} onChange={ageHandleChange} />
                    </div>
                    <div>
                        <button type="submit" >Add user</button>
                    </div>
                </form>
            </div>
            <div>
                {!isAddValue &&
                ReactDOM.createPortal(<ErrorMessage errorMessage={errorMessage} onExitErrorBox={exitErrorBoxHandler} onErrorComponentsRender={props.onErrorComponentsRender} />,
                    document.getElementById('back-drop')
                  )
              }
            </div>
        </React.Fragment>

    )
};
export default UserInputForm;