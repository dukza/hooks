import React, { useState} from 'react';
import ReactDOM from 'react-dom';
//useTitle

const copy = false;

const useBtn = (initialText) => {
  const [text, setText] = useState(initialText);
  return {
    text,setText
  }  
}

const Code = () => {
  const {text,setText} = useBtn('copy');
  setTimeout(() => setText('copy'), 1000);
  return(
    <>
        <button onClick={() => setText('copied')}>
        {text}</button>
    </>    
  )
}

const App = () => {
  return(
    <>
      <Code/>
      <Code/>
      <Code/>
      <Code/>
    </>    
  )
}
ReactDOM.render(
    <App />,
  document.getElementById('root')
);
