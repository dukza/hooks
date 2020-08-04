import React,{useEffect, useState, useRef} from 'react';
import ReactDOM from 'react-dom';
//useScroll & useFullscreen
// https://youtu.be/TxZBPBCKiHE
const useScroll = () => {
  const [state, setState] = useState({
    x:0,
    y:0
  })
  const onScroll = () => {
    setState({y:window.scrollY,x:window.scrollX})
  }
  useEffect(()=>{
    window.addEventListener('scroll',onScroll)
    return () => {
      window.removeEventListener('scroll',onScroll)
    }
  },[])
  return state;
}


const App = () => {
  const {y} = useScroll();
  return(
    <>
    <div className="App" style={{height:'1000px'}}>
      <h1 style={{position:'fixed', color:y > 100 ? "red" : 'blue'}}>Title</h1>
    </div>
    </>    
  )
}
ReactDOM.render(
    <App />,
  document.getElementById('root')
);
