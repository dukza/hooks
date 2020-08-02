import React,{useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
//useFadeIn & useNetwork
// https://youtu.be/TxZBPBCKiHE
const useNetwork = (func) => {
  const [status, setStatus] = useState(navigator.onLine); 
  const onNetwork = () =>{
    if(typeof func === 'function'){
      func(navigator.onLine);
    }
    setStatus(navigator.onLine);
  }
  useEffect(() => {
    window.addEventListener('online',onNetwork)
    window.addEventListener('offline',onNetwork)
    return () => {
      window.removeEventListener('online',onNetwork)
      window.removeEventListener('offline',onNetwork)
    }
  },[])
  return status
}


const App = () => {
  const networkHandle = (online) => {
    console.log(online ? 'online' :'Offline')
  }
  const network = useNetwork(networkHandle);
  return(
    <>
    <div className="App">
      <h1>{network ? 'Online' : 'Offline'}</h1>
    </div>
    </>    
  )
}
ReactDOM.render(
    <App />,
  document.getElementById('root')
);
