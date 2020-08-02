import React,{useEffect} from 'react';
import ReactDOM from 'react-dom';
//useBeforeLeave

const useBeforeLeave = (func) => {
  const setLeave = (e) => {
    const {clientY} = e;
    if(clientY <= 0){
      func();
    }
  }
  useEffect(()=>{
    if(typeof func === 'function'){
      document.addEventListener('mouseleave', setLeave)
      return () => {
        document.removeEventListener('mouseleave', setLeave)
      }      
    }else{
      return;
    }

  },[])
}


const App = () => {
  const onLeave = () => {console.log(`Don't leave`)}
  useBeforeLeave(onLeave);
  return(
    <>
    <div className="App">
      <h1>Hello</h1>
    </div>
    </>    
  )
}
ReactDOM.render(
    <App />,
  document.getElementById('root')
);
