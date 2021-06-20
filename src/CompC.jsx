import React from 'react';
import { Data } from "./CompA";
const CompC = () =>{
    return(
     <>
     <Data.Consumer>
         {(data) =>{
            return(<h1>hew {data}</h1>) 
         }}
     </Data.Consumer>
</>
    )

}
export default CompC;