import logo from './logo.svg';

import './App.css';
import Header from './Header';
import Cart from './Cart';
import Note from './Note';
import CompA from './CompA';
import CompC from './CompC';
import { useState } from 'react';

const App = () => {
  const [sdata, ndata] = useState([]);
  const addNote = (note) =>{
      ndata((prevdata) =>{
        return([...prevdata, note])
        
      })
       
  }
  const deleItem =  (id) => {
   ndata((preData) =>
     preData.filter((currVal , index) =>{
      return index !==  id ;
       
      
     })
   )
  }
  return (
    <>
  
    <Header />
    <Cart show = {addNote} />
    <div className="content">
    {
      sdata.map((val, index) =>{
       return(
       
        <Note
        key = {index}
        id= {index}
        title = {val.title}
        description = {val.description}
        deleteItem = {deleItem}
         />
        
       )
      })
    }
    </div>
    <CompA />
    <CompC />
    </>
  );
}

export default App;
