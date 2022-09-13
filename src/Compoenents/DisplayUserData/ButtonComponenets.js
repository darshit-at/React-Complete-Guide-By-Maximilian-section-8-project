import React from 'react'
const ButtonComponenets = (props) => {

    const filterDataHandlerEvent = (event) => {
        console.log(props.dataes, event.target.id)
        const filter = props.dataes.filter((data) => data.id !== parseInt(event.target.id));
        props.onDeleteHandleEvent(filter);
    };



    return (
        <>
          
            <button type='button' id={props.id} onClick={filterDataHandlerEvent}>Delete</button>
        </>

    )
};
export default ButtonComponenets;