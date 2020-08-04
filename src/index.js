import React, { useState, useEffect } from 'react';

import ReactDOM from 'react-dom';

//useEffect

const App = () => {
  const sayHello = () => console.log('3useEffect');
  const [number, setNumber] = useState(0);
  const [aNumber, setAnumber] = useState(0);
  useEffect(sayHello, []) ; 
  console.log('1const')
  return(
    <>
      {console.log('2return')}
      <div>Hi</div>
      <button onClick={()=> setNumber(number+1)}>{number}</button>
      <button onClick={()=> setAnumber(aNumber+1)}>{aNumber}</button>
    </>    
  )
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);
