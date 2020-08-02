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

const useTab = (initialIdx) => {
  const [idx, setIdx] = useState(initialIdx);
  const onClick = (e) => {
    const {target:{id}} = e
    setIdx(id);
  }
  return {idx, onClick}
}

const App = () => {
  const tab = useTab(0);
  return(
    <>
      {contents.map((content, index)=>
      <button {...tab} id={index}
      >{content.tab}</button>)}
      <div>
       {contents[tab.idx].content} 
      </div>
    </>    
  )
}



ReactDOM.render(
    <App />,
  document.getElementById('root')
);
