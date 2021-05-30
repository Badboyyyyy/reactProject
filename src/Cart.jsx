import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
const Cart = ( props) =>{
    const [tdata, sdata] = useState({
        title : "",
        description : ""
    });
    const indata = (event) =>{
     
      const { name, value} = event.target;
       sdata((prevData) => {
       return ({
           ... prevData,
           [name] : value
       })
       
       })
       
    }
    const data = () =>{
         props.show(tdata);
    }
     return(
         <>
         <div className="card">
             <input type="text" onChange={indata} placeholder="Please enter your title" name="title" value={tdata.title}/>
             <textarea onChange={indata} placeholder="Please enter description" name="description" value={tdata.description}></textarea>
             <Button onClick= {data}> <AddIcon /> </Button>
         </div>
         </>
     )
}
export default Cart; 