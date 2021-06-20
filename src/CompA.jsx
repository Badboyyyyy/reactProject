import React, { createContext } from 'react';
const Data = createContext();
const CompA = () =>{
   
   return (
       <>
       <Data.Provider value={"Hacker"}>
       
       </Data.Provider>
     
       </>
   )
}
export default CompA;
export { Data };