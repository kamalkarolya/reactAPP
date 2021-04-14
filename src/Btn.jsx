import React , {useState} from 'react';
import "./Btn.css";
import {time} from './Time';
const Btn = () => {
    const state= useState();
    const [count,setCount] = useState(0);
    const ccon=()=> {
        setCount (count + 1);
    };
   
    return  <>
    <h1>CLICK COUNTER </h1>
    <h1>{count}</h1>
    <button className="btn-a" onClick={ccon} > Click!!</button>
   
    </>
}

const Btnt =() =>{
     const [Ctime,Setctime] = useState(time);

    const update=()=>{
      let  time = new Date().toLocaleTimeString();
        Setctime(time);
        
    }
    setInterval(update,1000)

    return <> <div>
       <h1 style={{paddingLeft:'12px', color:'blue'}} > {Ctime}</h1>
        {/* <button  className="btn-a" onClick={update} >Update</button> */}
    </div>
    </>
}

const Diff =()=>{ 

    const black = '#79bde9';
const [bg,setBg ]= useState(black);
const [bt,setBt]= useState("Dark");
    const dark = () =>{
         const newbg= '#001c5c';
       
         setBg(newbg);
         setBt("Light");
     }
     const light =()=>{
         setBt("Dark");
         setBg(black);
     }
     return<>
     <div style={{backgroundColor:bg}} >
         
     <button onClick={dark}  onDoubleClick={light}  className="btn-a"  >{bt}</button>
     </div>
     </>


}
export default Btn;
export  {Btnt} ; 
export {Diff};