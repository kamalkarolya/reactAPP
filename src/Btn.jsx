import React , {useState} from 'react';
import "./Btn.css";
import {time} from './Time';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
const Btn = () => {
    const state= useState();
    const [count,setCount] = useState(0);
    const ccon=()=> {
        setCount (count + 1);
    };
   const cccon=()=>{
      if (count<1) {
          alert("Can't Decreament Zero ");
          
      }else{
          setCount (count-1);
      }
   };
    return  <>
    <h1>CLICK COUNTER </h1>
    <h1>{count}</h1>
    <div style={{display:"flex",justifyContent:"center"}} >
    <Button  onClick={ccon} style={{margin:"12px"}} variant="contained" className="btn-a" color="primary" >
       <AddIcon/>
    </Button>
    <Button  onClick={cccon} style={{margin:"12px"}} variant="contained" className="btn-a" color="secondary" >
       <RemoveIcon/>
    </Button>
   </div>
    {/* <button><i className="bi bi-plus-circle-fill"></i></button>
    <button onClick={cccon} > Decrement</button> */}
   
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