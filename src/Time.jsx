import React from 'react';

 const date = new Date().toLocaleDateString();
     const time = new Date().toLocaleTimeString();
     const name = "karolya";
function Time (){
    const styling ={
        color : "red",
        border :" 2px solid red"
      }
     return <>
      <h1 className="head" >My name is kamal</h1>
      <h2 contentEditable="true" >My name is {name}</h2>
      <p style={{color:"blue"}} > {date}  </p>
      <p style={styling} > {time}  </p>
      </>
     
//  setTimeout(Time(),1000); 
}
   
export default Time;
export {time};