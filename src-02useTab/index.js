import React, { useState } from 'react';
import ReactDOM from 'react-dom';
//02useTab
const contents = [
  {
    tab: 'tab1',
    content: 'this is tab1'
  },  
  {
    tab: 'tab2',
    content: 'this is tab2'
  }

]

const useTab = (initialIdx,contents) => {
  const [idx, setIdx] = useState(initialIdx);
  //https://nomadcoders.co/react-hooks-introduction/lectures/1592
  if(!contents && !Array.isArray(contents)){
    return;
  }
  return {
    currentIdx:contents[idx]
    , onClick:setIdx}
}

const App = () => {
  const {currentIdx, onClick} = useTab(0, contents);
  return(
    <>
      {contents.map((content, index)=>
      <button onClick={()=>onClick(index)}
      >{content.tab}</button>)}
      <div>
       {currentIdx.content} 
      </div>
    </>    
  )
}



ReactDOM.render(
    <App />,
  document.getElementById('root')
);
