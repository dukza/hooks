import React from 'react';
import ReactDOM from 'react-dom';
//useConfirm & usePreventLeave

const usePreventLeave = () => {
  const onProtect = (e) => {
    e.preventDefault();
    e.returnValue = '';
  }
  const setProtect = () => {
    window.addEventListener('beforeunload',onProtect);
    console.log('setProtect');
  }
  const setUnProtect = () => {
    window.removeEventListener('beforeunload',onProtect);
    console.log('setUnProtect');

  }
  return {setProtect, setUnProtect};
}


const App = () => {
  const {setProtect, setUnProtect} = usePreventLeave();
  return(
    <>
    <div className="App">
      <button onClick={setProtect}>Protect</button>
      <button onClick={setUnProtect}>Unprotect</button>
    </div>
    </>    
  )
}
ReactDOM.render(
    <App />,
  document.getElementById('root')
);
