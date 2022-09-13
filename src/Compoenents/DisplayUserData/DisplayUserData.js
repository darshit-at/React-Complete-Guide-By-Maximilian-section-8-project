import React from 'react';
import ButtonComponenets from './ButtonComponenets';
import './DisplayUserData.css';

const DisplayUserData = (props) =>{
        return (
            <div key={`data ${props.id}`} className='data-list-control'>
            <h2>{props.username}({props.userage} year old)</h2>
            <div className='button'>
              <ButtonComponenets 
              id={props.id} 
              onDeleteHandleEvent={props.onDeleteHandleEvent} 
              dataes ={props.dataes}    
             />
            </div>
        </div>
        )
   
      


    
}
export default DisplayUserData;