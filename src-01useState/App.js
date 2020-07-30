import React, { useState } from 'react';
import './App.css';


const App = () => {
  const [count, setCount] = useState(0);
  const [email, setEmail] = useState("");
  const onChange = (e) => {
    const {target:{value}} = e;
    setEmail(value)
  }
  return(
    <>
      <div>{count}</div>
      <button onClick={()=> setCount(count+1)}>+</button>
      <button onClick={()=> setCount(count-1)}>-</button>
      <input placeholder="email" value={email}
      onChange={onChange}
      />
    </>    
  )
}

export default App;