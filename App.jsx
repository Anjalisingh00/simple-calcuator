 import React from "react";
 import{add,sub,mul,div}from "./Calc";
 function App()
 {
    return(
        <>
        <ul>
        <li>sum of two numbers is{add(35, 6)}</li>
        <li>difference of two numbers is{sub(35, 6)}</li>
        <li>multiplication of two numbers is{mul(35, 6)}</li>
        <li>division of two numbers is{div(35, 6)}</li>
        
          </ul>
        
        </>
    );
 }
 export default App;