import React from 'react';

const Sresult = (props) =>{
       const imag = `https://source.unsplash.com/400x300/?${props.name}`; 

       
       return (
       
        <>
       <img  style={{width:"50%", alignSelf:"center"}} src={imag}  />
        
        </>
    )
}

export default Sresult;