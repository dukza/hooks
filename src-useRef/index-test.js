import React, { useState, useRef} from 'react';
import ReactDOM from 'react-dom';
//useRef

const useClick = () => {
  const test = useRef();
  return test;
}

const App = () => {
  const title = useClick();
  setTimeout(() => console.log(title),2000)
  return(
    <>
    <div className="App">
      <h1 ref={title}>Hi</h1>
    </div>
    </>    
  )
}
ReactDOM.render(
    <App />,
  document.getElementById('root')
);
