import React ,{ useState} from 'react';
import UserInputForm from '../Compoenents/User/UserInputForm';

const UserForm = (props) => {


  const getUserData = (data) => {
        const userData ={ 
            ...data
        }
 props.onGetUserDataHandler(userData);
  };

    return (
        <div className='user-form-parent-components'>
            <UserInputForm onGetDataHandler ={getUserData} onErrorComponentsRender={props.onErrorComponentsRender}/>
        </div>
        
    )
};
export default UserForm;