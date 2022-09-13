import React, { useState } from 'react';
import './DisplayUserList.css';
import DisplayUserData from './DisplayUserData';

const DisplayUserList = (props) => {
  return (
    <React.Fragment>
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
    </React.Fragment>




  )
};
export default DisplayUserList;