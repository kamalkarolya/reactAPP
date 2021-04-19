import React , { useState } from 'react';
import './Btn.css';

const Login = () => {

    const [Data, setData] = useState({
        fname: "",
        lname: "",
        email: "",
        phone: "",
     });

     const inputs = (event)=>{
        console.log(event.target.value);

        const {value,name} = event.target;


      setData((prevalue)=>{
          return{
              ...prevalue,
              [name]:value,
          };
        // if (name==="fname") {
        //     return{
        //         fname :value,
        //         lname : prevalue.lname,
        //         email : prevalue.email,
        //         phone : prevalue.phone,
        //     };
            
        // }else if (name==="lname"){
        //     return{
        //         fname :prevalue.fname,
        //         lname : value,
        //         email : prevalue.email,
        //         phone : prevalue.phone,
        //     };
        
        // }else if (name==="email"){
        //     return{
        //         fname :prevalue.fname,
        //         lname : prevalue.lname,
        //         email : value,
        //         phone : prevalue.phone,
        //     };
        
        // }else if (name==="phone"){
        //     return{
        //         fname :prevalue.fname,
        //         lname : prevalue.lname,
        //         email : prevalue.email,
        //         phone : value,
        //     };
        // }
    })

    }
    

    const Submite = (event) => {
        event.preventDefault();
    }




    const styles = {
        display: "flex",
        flexDirection: "column"
    }

    return (
        <>
            <form style={styles} onSubmit={Submite}>
                <h1>Login {Data.fname} {Data.lname}   </h1>
                <p> {Data.email} </p>
                <p>  {Data.phone} </p>
                <input type="text" className="forum" onChange={inputs} name="fname"  value={Data.fname} placeholder=" First Name " />
                <input type="text" className="forum" onChange={inputs} name="lname" value={Data.lname} placeholder=" Last Name" />
                <input type="email" className="forum" onChange={inputs} name="email"  value={Data.email} placeholder=" Your Email" />
                <input type="number" className="forum" onChange={inputs} name="phone" value={Data.phone} placeholder=" Your Number" />
                <button className="btn-a" type="submit" >Submit</button>
            </form>
        </>

    )
}

export default Login;