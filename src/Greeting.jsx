import React from 'react';
import { Btnt } from './Btn';
import './Greeting.css';
//  import Time,{time} from './Time';
// import * as tame from './Time';
// when calling use -------{tame.time}------

function Greeting(){
    var good = '';
    let Crdate = new Date();
    let crdate = Crdate.getHours();
    var styles = {};
    if (crdate>=5 && crdate<12) {
        good= 'Good Morning';
        styles.color='blue';
        
    }else if (crdate>=12 && crdate<19) {
        good='Good Afternoon';
        styles.color='red';
    }else if (crdate>=19 && crdate<21) {
        good='Good Afternoon';
        styles.color='green';
    }
    
    else{
        styles.color='brown';
        good='Good Night';
    }
    
    
    return (
        <>
        <div className="sect" >
        <div  className="greet" style={{color:'green'}} >Hello sir,  <span style={styles}> {good} </span> </div>
       <Btnt /> </div> </>
    )

}
export default Greeting;