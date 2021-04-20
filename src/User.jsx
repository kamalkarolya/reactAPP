import React from 'react';
import {useHistory, useLocation, useParams} from 'react-router-dom';
import './Btn.css';
const User =()=>{
    const  { fname,lname} = useParams();
   const location = useLocation();
   const history = useHistory();
    return (
        <>
        <h1>this is {fname} {lname} </h1>
        <p>The location is  {location.pathname} </p>
       { location.pathname===`/user/kamal/karolya`? ( <button className="btn-a" onClick={()=>history.push('/about')  } >click me</button> ) : null    }
        </>


    )
}
export default User;