import React , { Component }  from 'react';
import TypeText from 'react-typing-text';
import 'react-typing-text/dist/index.css';

 const date = new Date().toLocaleDateString();
     const time = new Date().toLocaleTimeString();
     const name = "karolya";
function Time (){
    const styling ={
        color : "red",
        border :" 2px solid red"
      }
     return <>
     {/* <TypeText text='  ' /> */}
      <h1 className="head" >Time moves in one direction, memory in another.</h1>
      <h2  > :- William Gibson </h2 >
      <p style={{color:"blue"}} > {date}  </p>
      <p style={styling} > {time}  </p>
      </>
     
//  setTimeout(Time(),1000); 
}
   
export default Time;
export {time};