import React, { useState } from 'react';
import './DisplayUserList.css';
import DisplayUserData from './DisplayUserData';

const DisplayUserList = (props) => {
  return (
    <>
      {props.dataes.map((data) => {
        return (
          <div className='display-data-control' key={`data ${data.id}`} >
            <DisplayUserData
              id={data.id}
              username={data.userName}
              userage={data.userAge}
              onDeleteHandleEvent={props.onDeleteHandleEvent}
              dataes={props.dataes}
            
            />
          </div>
        )
      })}
    </>




  )
};
export default DisplayUserList;