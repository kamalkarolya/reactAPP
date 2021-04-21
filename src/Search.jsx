import React, { useState } from 'react';
import './Btn.css';
import Sresult from './Sresult';
const Search = () =>{
    const [img,setImg]= useState("");
   const inputev=(event)=>{
          var data =  event.target.value;
          console.log(data);
          setImg(data);
       }  
       return (
      
        <>
        <input className="forum" onChange={inputev} value={img} />
           { img===""? null :  <Sresult name={img} /> } 
        </>
    )
}

export default Search;