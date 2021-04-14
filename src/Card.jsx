import React from 'react';
import "./Card.css";

function Card (props){
   return <>
    <div className="cards" > 
    <a href={props.link} target="_blank" > 
    <button>
         <div> 
             <img  src={props.imgsrc} alt={props.title} />
         </div>
           <div className="cardhead" >
               <h1 > {props.title} </h1>
           </div>  
     </button>    
  </a> 
       </div>
      
   </>

}

const Mcard = (props)=>{
    return <> 
    <div className="mcards" >
    <h2>{props.Mname}</h2>
     <h4> {props.designation} </h4>
     <div className="social" >
         <p> <a href={props.insta}  target="_blank" > <i class="bi bi-instagram"></i> </a> </p>
         <p> <a href={props.linkedin}  target="_blank" ><i class="bi bi-linkedin"></i>  </a> </p>
     </div>
     </div>
     </>
}


 export default Card;
 export {Mcard};
