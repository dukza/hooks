import React, { useState, useRef, useEffect} from 'react';
import ReactDOM from 'react-dom';
//useRef
// https://youtu.be/0BuVYgM86gA
const useClick = (func) => {
  if(typeof func !== 'function'){
    return;
  }
  const element = useRef();
  useEffect(() => {
    // componentDidMount, componentDidUpdate , 
    if(element.current){
      element.current.addEventListener('click', func)
    }
    // []가 있을때는 componentDidUpdate
    return ( ) => {
      if(element.current){
        element.current.removeEventListener('click', func) 
      }
    }
  }, [])
  return element;
}

const App = () => {
  const sayHello = () => console.log('Say Hello')
  const title = useClick(sayHello);
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
