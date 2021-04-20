import React, { useEffect, useState } from "react";
import axios from 'axios';
import './Btn.css';
const Pokemon = () =>{
    const [no,setNo]= useState("0");
    const [pname,setPname]= useState("");
    const [pmove,setPmove]= useState("");
    
    useEffect(()=>{
        async function getdata(){
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${no}`);
            setPname(res.data.name);
            setPmove(res.data.moves.length);

        }
        getdata();
    });

   useEffect(()=>{
       document.title=`Pokemon GOO`;
   });
//    https://pokeapi.co/api/v2/pokemon/1
    return <>
     <h1>Pokemon</h1> 
     <p>You Choose {no} value </p>
     <p>Pokemon Card is {pname} </p>
     <p>Pokemon moves is {pmove}  </p>
     <select className="forum" value={no} onChange={(event)=>{
         setNo(event.target.value);
     }} >
         <option value="1">1</option>
         <option value="2">2</option>
         <option value="25">25</option>
         <option value="3">3</option>
         <option value="4">4</option>
     </select>
    </>
}

export default Pokemon;