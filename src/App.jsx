import React, { useEffect, useState }  from 'react';
import './App.css';
import * as cal from './Calculator';
import Card, { Mcard } from './Card';
import Greeting from './Greeting';
import Sdata, { Mdata } from './Sdata';
import Time from './Time';
import Btn, { Diff } from './Btn';
import Form, { Forms } from './Form';
import Header from './Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './Login';
import Todo from './Todo';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlareIcon from '@material-ui/icons/Flare';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';
// import Sdata from './Sdata';
// var good = '';
// let Crdate = new Date();
// let crdate = Crdate.getHours();
// var styles = {};
// if (crdate>=1 && crdate<12) {
//     good= 'Good Morning';
//     styles.color='blue';

// }else if (crdate>=12 && crdate<19) {
//     good='Good Afternoon';
//     styles.color='red';
// }else{
//     styles.color='white';
//     good='Good Night';
// }


// const greeting = (
//     <div style={{color:'green'}} >Hello sir <span style={styles}> {good} {crdate} </span> </div>
// )
// ReactDOM.render(
//     greeting,
//     document.getElementById('forum')
//   );
// export default greeting;

// -------------------------------how to declare function-------------------
//  function cardn(val) {
//    return <>
//    <Card imgsrc={val.imgsrc}
//   title={val.title} /> </>
//  }
const cardn = (val) => {
  return <>
    <Card key={val.id}
      link={val.link}
      imgsrc={val.imgsrc}
      title={val.title} /> </>
}
const cardm = (val) => {
  return <>
    <Mcard key={val.sno}
      Mname={val.Mname}
      designation={val.designation}
      insta={val.insta}
      linkedin={val.linkedin}
    /> </>
}
// -----------------------both are corrct method------------------2 one is more efficient
function App() {
  const [value, setValue] = useState(new Date());
 
  useEffect(() => {
    const interval = setInterval(
      () => setValue(new Date()),
      1000
    );
 
    return () => {
      clearInterval(interval);
    }
  }, []);
  return <>
    <Router>
      <Header />
      {/* <div style={{ marginTop:"6vw"}} >
      <h2>lists</h2>
      <ol>

        <li>Cherry</li>
        <li>Apple</li>
        <li>Mango</li>
        <li>Banana</li>
      </ol>
    </div> */}

      {/* <ol>
      <li>The sum of no is {cal.default(5, 6)}</li>
      <li>The sum of no is {cal.sub(25, 6)}</li>
      <li>The sum of no is {cal.mul(5, 6)}</li>
      <li>The sum of no is {cal.dibs(25, 5)}</li>

    </ol> */}

      {/* <Card
    imgsrc= {Sdata[0].imgsrc}
    title= {Sdata[0].title}
     />
   <Card
    imgsrc= {Sdata[1].imgsrc}
    title= {Sdata[1].title}
     />
   <Card
    imgsrc= {Sdata[2].imgsrc}
    title= {Sdata[2].title}
     />
   <Card
    imgsrc= {Sdata[3].imgsrc}
    title= {Sdata[3].title}
     />  */}

      <Switch>
        <Route exact path="/" render={
          () => {
            return <>
            <div className="digital" > 
              <Clock value={value} /></div>
              <Time style={{ marginTop: "6vw" }} />
              <Greeting />
             

              <Btn />
              {/* <Btnt /> */}
              <Diff />
              <Form />
              <Forms />
            </>

          }
        } >

        </Route>
        <Route exact path="/about" render={
          () => {
            return <>
              <div className="promax" >
                <h1>Ultra Pro Max <FlareIcon style={{ color: "yellow" }} />   </h1>
                <p>A Community who Leads Everyone</p>
                <hr style={{ margin: "2vw 0 " }} ></hr>
                <h1 className="team" >Our Team <PeopleOutlineIcon style={{color:"coral" , fontSize:"3.5rem"}}    /> </h1>
                {Mdata.map(cardm)}
                <div className="footer" > <div className="line" > </div>

                
                <p style={{ fontSize: "0.8rem" }} >Made with  <FavoriteIcon style={{ color: "red", fontSize:"1rem" }}  />  by Ultra Pro Max</p>
            </div>   </div>
            </>
          }
        } >

        </Route>
        <Route  exact path="/ott" render={
          ()=>{
            return <>
             <h1>Best OTT Platform </h1>
              <div className="cardn"  >
                {Sdata.map(cardn)}
                {/* -------------------------------or u can define function here also---------------------  */}

              </div>
            </>

          }
        } >

        </Route>
        <Route  exact path="/login" >
          <Login />
        </Route>
        <Route  exact path="/todo" >
          <Todo />
        </Route>
      </Switch>
    </Router>
  </>
}
export default App;
