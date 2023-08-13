import React, { useState } from 'react';
import './Effect.css';


function Effect() {
    const [bal,setbal]=useState(1000);
    return ( 
    <>  
    <br></br>
    <div className='container'>
    <h2>Welcome To</h2>
    <h1>Learning Bank  </h1>
       <u> <h2>Your Balance is :  {bal}</h2> </u>
   
        <br />
    <button onClick={()=>{setbal((bal)=>bal+100)}}><b>100 Dep</b></button> 
    <button onClick={()=>{setbal((bal)=>bal+500)}}><b>500 Dep</b></button><p />
    <button onClick={()=>{setbal((bal)=>bal-100)}}><b>100 With</b></button> 
    <button onClick={()=>{setbal((bal)=>bal-500)}}><b>500 With</b></button> 
    </div>

    </> 
    );
}

export default Effect;