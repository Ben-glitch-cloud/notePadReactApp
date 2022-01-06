import React, { useState } from 'react'; 

import './Data-Item.css' 

function DataItem(props){    
 
   function getId(event){ props.getIdFromItem(event.target.id)}  

    return(
        <div className='Data-item-con' onClick={getId} id={props.id}> 
            <p className='note' onClick={getId} id={props.id}> {props.note}</p> 
            <p className='date' onClick={getId} id={props.id}>{props.date}</p> 
        </div>
    )
} 

export default DataItem