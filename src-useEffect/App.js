import React, { useState, useEffect } from 'react';


const App = () => {
  const [title, setTitle] =  useState('loading');
  const [count, setCount] = useState(0);
  const [aCount, setAcount] = useState(0);
  const titleFunc = () => {
    const titleHtml = document.querySelector('title');
    titleHtml.innerHTML = title;
    console.log('title')
  }
  const sayHello = () => console.log('Hello');
  // useEffect(() => sayHello())
  // useEffect(sayHello,[count])
  useEffect(titleFunc,[aCount])
  return(
    <>

      <button onClick={()=> setTitle('111')}>{count}</button>
      <button onClick={()=> setAcount(aCount+1)}>{aCount}</button>

    </>    
  )
}

export default App;