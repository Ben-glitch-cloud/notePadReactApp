import React, { useState } from 'react'; 
import Title from './components/Heading/Title'  
import DataForm from './components/Form/DataForm';
import DataItems from './components/Data/DataItems' 
import './App.css';  

let notedata = [{'id': '1', 'note': 'We are going to build an app.', 'date': '12-May-2022'}, 
                {'id': '2', 'note': 'This will make use work on are React skills.', 'date': '12-Dec-2022'}, 
                {'id': '3', 'note': 'Hoping to build on my know how with react.', 'date': '12-Feb-2022'}]

function App() {  

  const [data, setdata] = useState(notedata)

  function getNewNoteDate(event){   
    setdata(data => [...data, event]) 
    console.log('Note has been added.')
  } 

  function DeleteItem(event){  
    setdata(data => data.filter((item) => item["id"] != event))    
    console.log(`A note with an ID: ${event} has been delete.`)
  }

  return (
    <div>
      <Title/>    
      <DataForm getNewNote={getNewNoteDate}/>
      <DataItems notedata={data} getId={DeleteItem}/> 
    </div>
  );
}

export default App;
