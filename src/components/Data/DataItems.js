import './DataItems.css' 

import DataItem from './Data-Item'

function DataItems(props){  

    function getId(event){
        props.getId(event)
    } 

    return(
        <div className='DataItem'> 
            {props.notedata.map((item) => { 
                return <DataItem id={item.id} note={item.note} date={item.date} getIdFromItem={getId}/>
            })}
        </div>
    )
} 

export default DataItems;