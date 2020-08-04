import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
//useTitle

const useTitle = (initialText, initialNumber) => {
  const [title, setTitle] =  useState(initialText);
  const [number, setNumber] = useState(initialNumber);
  const [aNumber, setAnumber] = useState(initialNumber);
  const titleFunc = () => {
    const titleHtml = document.querySelector('title');
    titleHtml.innerHTML = title;
  }
  useEffect(titleFunc)  

  return {setTitle, number, setNumber, aNumber, setAnumber};
}

const App = () => {
  const {setTitle, number, setNumber, aNumber, setAnumber} = useTitle('Loading',0);
  setTimeout(() => setTitle('Home'), 1000);

  return(
    <>
     <h1>Header</h1>
  <button onClick={()=>setNumber(number+1)}>{number}</button>
  <button onClick={()=>setAnumber(aNumber+1)}>{aNumber}</button>
    </>    
  )
}
ReactDOM.render(
    <App />,
  document.getElementById('root')
);
