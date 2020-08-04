import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
//useTitle

const useTitle = (initialTitle) => {
  // 1
  const [title, setTitle] = useState(initialTitle);
  const onTitle = () => {
    const htmlTitle = document.querySelector('title');  
    htmlTitle.innerText = title;
  }
  // // 4 title이 변경될때 onTitle 실행
  // useEffect(onTitle,[title])
  // 3
  return {title, setTitle};
}

const App = () => {
  // 2
  const {title, setTitle} = useTitle('Loding...');
  setTimeout(() => setTitle('Home'),1000)
  console.log(title);
  return(
    <>
    </>    
  )
}
ReactDOM.render(
    <App />,
document.getElementById('root')
);
