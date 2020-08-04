import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//useState
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

ReactDOM.render(
    <App />,
  document.getElementById('root')
);
