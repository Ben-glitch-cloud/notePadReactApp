import React, { useState } from 'react'; 

import './DataForm.css'

function DataForm(props){     

    const [score, setscore] = useState(4) 
    const [TextValue, setTextValue] = useState('') 
    const [TextLength, setTextLength] = useState(true)

    let Object;   

   function getNoteValue(event){ 
    event.preventDefault();   
    if(event.target[0].value.trim().length === 0) { 
        setTextLength(false) 
        return;
    } 
    setTextLength(true)
    createNoteData(event)
   }   

   function ChangeState(event){
    setTextValue(event.target.value)
   }

   function dateNow(){
       let Data = new Date  
       let ArrayDate = Data.toString().split(' ') 
        return `${ArrayDate[2]}-${ArrayDate[1]}-${ArrayDate[3]}`
   } 

   function createNoteData(event){
    Object = {"id": score.toString(), "note": event.target[0].value, "date": dateNow() } 
    setscore(score + 1) 
    props.getNewNote(Object) 
    setTextValue('')
   }  

   
    return( 
    <div> 
        <p className={`error ${!TextLength ? 'invaild' : ''}`} >There was no note to be added?</p>
        <div className='Form'> 
            <form className='FormBox' onSubmit={getNoteValue}>  
                <input className={`textbox ${!TextLength ? 'invaild' : ''}`} type="text" value={TextValue}  onChange={ChangeState}></input> 
                <button className='button' type='submit' value="Submit">Submit</button>
            </form>
        </div> 
    </div>
    )
} 

export default DataForm