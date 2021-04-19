import React, { useState } from 'react';

import Button from '@material-ui/core/Button';

import './Btn.css';
const Form =() =>{

    const [Name,setName] = useState("");
    const [Fname,setFname] = useState("");
    const Submite = () => {
        setFname(Name);
    }
    const inputv = (event) =>{
         console.log(event.target.value);
         setName(event.target.value);
    }
   return <>
   <h1>Hello {Fname}</h1>
   <input type="text"  className="forum" onChange={inputv}  value={Name} placeholder="Enter Your Name"  />

   <Button variant="contained" className="btn-a" onClick={Submite}   color="primary"> Submit</Button>
   </>

}

const Forms = () =>{

    const [Name,setName] = useState("");
    const [Fname,setFname] = useState("");
    const [Lname,setLname] = useState("");
    const [Lnaam,setLnaam] = useState("");
    const Submite = (event) => {
        setFname(Name);
        setLnaam(Lname);
        event.preventDefault();
           }
    const inputf = (event) =>{
         console.log(event.target.value);
         setName(event.target.value);
    }
    const inputl = (event) =>{
         console.log(event.target.value);
         setLname(event.target.value);
    }
    const styles= {
        display:"flex",
        flexDirection:"column"
    }
    return <>
     <form  style={styles} onSubmit={Submite}>
     <h1>Login {Fname} {Lnaam}  </h1>
     <input type="text" className="forum" onChange={inputf}  value={Name}   placeholder=" Your Email" />
     <input type="text" className="forum" onChange={inputl}  value={Lname}  placeholder=" Your Password" />  <br/>
    
      <Button variant="contained" className="btn-a" type="submit" color="primary"> Submit</Button>
 

    </form>
    </>
}

export default Form;
export {Forms};