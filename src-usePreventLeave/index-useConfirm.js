import React from 'react';
import ReactDOM from 'react-dom';
//useConfirm & usePreventLeave

const useConfirm = (massage='', onConfirm, onCancel) => {
  if(!onConfirm || typeof onConfirm !== 'function'){
    return;
  }
  if(onCancel && typeof onCancel !== 'function'){
    return;
  }
  const setConfirm = () => {
    if(window.confirm(massage)){
      onConfirm();
    }else{
      onCancel();
    }
  }
  return setConfirm;
}


const App = () => {
  const deleteWorld = () => console.log('deleted the world...')
  const abort = () => console.log('aborted')
  const confirmDel = useConfirm('Are you Sure?',deleteWorld, abort);
  return(
    <>
    <div className="App">
      <button onClick={confirmDel}>Delete the world</button>
    </div>
    </>    
  )
}
ReactDOM.render(
    <App />,
  document.getElementById('root')
);
