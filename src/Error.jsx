import React from 'react';
import {useHistory} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
const Error =()=>{
    
    const history = useHistory();
    const box = {
        height: "100vh",
        background:" brown",
        display:" flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems:" center",
        /* width: 50%; */
        alignSelf:" center",
        padding: "0 200px"
    }
    return (
        <> 
        <div  style={box} >

        <h1> <SentimentVeryDissatisfiedIcon  style={{fontSize:"2.5rem"}} />404</h1>
        <h2>UH OH! You're lost.</h2>
        <p>The page you are looking for does not exist.
          How you got here is a mystery. But you can click the button below
          to go back to the homepage.
        </p>
            <h1> 404 Page Not Found</h1>
        
        <Button variant="contained" onClick={()=>history.push('/')  }  >Go Back</Button>
     
        </div>
        </>


    )
}
export default Error;