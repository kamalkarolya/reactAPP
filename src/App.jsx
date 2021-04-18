import React from 'react';
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
                <h1>Ultra Pro Max <i style={{ color: "yellow" }} className="bi bi-stars"></i> </h1>
                <p>A Community who Leads Everyone</p>
                <hr style={{ margin: "2vw 0 " }} ></hr>
                <h1 style={{ fontSize: "2.5rem" }} >Our Team</h1>
                {Mdata.map(cardm)}
                <hr style={{ width: "100%" }} >

                </hr>
                <p style={{ fontSize: "0.7rem" }} >made with <i style={{ color: "red" }} className="bi bi-suit-heart-fill"></i> by Ultra Pro Max</p>
              </div>
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
      </Switch>
    </Router>
  </>
}
export default App;
