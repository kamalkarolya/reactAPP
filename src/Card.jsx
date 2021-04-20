import React, {useEffect} from 'react';
import "./Card.css";
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


function Card (props){
    useEffect(()=>{
        document.title=`OTT Platforms`;
    });
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
    useEffect(()=>{
        document.title=`Ultra Pro Max | Teams`;
    });
    return <> 
    <div className="mcards" >
    <h2>{props.Mname}</h2>
     <h4> {props.designation} </h4>
     <div className="social" >
         <p> <a href={props.insta}  target="_blank" > <InstagramIcon /> </a> </p>
         <p> <a href={props.linkedin}  target="_blank" > <LinkedInIcon /> </a> </p>
     </div>
     </div>
     </>
}


 export default Card;
 export {Mcard};
