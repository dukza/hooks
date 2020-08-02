import React,{useEffect, useState, useRef} from 'react';
import ReactDOM from 'react-dom';
//useScroll & useFullscreen
// https://youtu.be/_f6ZnnuE0A0?t=714
const useFullscreen = (callback) => {
  const element = useRef();
  const onFull = () => {
    if(element.current){
      element.current.requestFullscreen();
      if(callback && typeof callback === 'function'){
        callback(true)
      }
    }
  }
  const onExit = () => {
     document.exitFullscreen();
     if(callback && typeof callback === 'function'){
      callback(false)
    }
  }
  return {element, onFull, onExit};
}


const App = () => {
  const fullHandle = (isFull) => {
    console.log(isFull? 'full' : 'exit')
  }
  const {element, onFull, onExit} = useFullscreen(fullHandle);
  return(
    <>
    <div className="App">
      <div ref={element}>
        <img src="https://images.unsplash.com/photo-1542296332-2e4473faf563?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60" />
        <div>
          <button onClick={onExit}>Exit</button>
        </div>
      </div>
      <div>
        <button onClick={onFull}>Full</button>
      </div>
    </div>
    </>    
  )
}
ReactDOM.render(
    <App />,
  document.getElementById('root')
);
