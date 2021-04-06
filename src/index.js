import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import King from './App';
import Game from './Part';
import reportWebVitals from './reportWebVitals';


// IN LAMEN LANGUAGE  HERE WE CALL FUNCTION 

const kamal=(
  <div>HI!! MY NAME IS john  </div>
)
ReactDOM.render(
  kamal,
  document.getElementById('roots')
);


ReactDOM.render(
  <King />,
  document.getElementById('rootes')
);
ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
// syntax
// ReactDOM.render(<p>html</p>, document.getElementById('idname'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
