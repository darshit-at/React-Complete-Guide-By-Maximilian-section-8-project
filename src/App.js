import React, { useState } from 'react';
import './App.css';
import DisplayUserList from './Compoenents/DisplayUserData/DisplayUserList';

import UserForm from './UI/UserForm';
let userid = 1;

const App = () => {

  const [userInputData, getUserInputData] = useState([]);
  const [bodyBackgroundColor, setbodyBackgroundColor] = useState('#1f1f1f');

  const getUserDataHandler = (data) => {
    const userData = {
      ...data,
      id: userid++
    }
    const newUserData = [...userInputData];
    newUserData.push(userData);
    getUserInputData(newUserData);
  };

  const DeleteHandler = (filterData) => {
    getUserInputData(filterData);
  };

  const changeBackgroundColor = (bgcolor) => {
    setbodyBackgroundColor(bgcolor)
  }

  return (
    <div className="App" style={{ background: bodyBackgroundColor }}>
      <div >
        <UserForm onGetUserDataHandler={getUserDataHandler} onErrorComponentsRender={changeBackgroundColor} />
      </div>
      <div className='fixed-position'>
        {userInputData.length > 0 && <DisplayUserList dataes={userInputData} onDeleteHandleEvent={DeleteHandler} />}
      </div>



    </div>
  );
};

export default App;
