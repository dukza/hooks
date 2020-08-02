import React,{useEffect, useRef} from 'react';
import ReactDOM from 'react-dom';
//useFadeIn & useNetwork

const useFadeIn = (duration = 2, delay = 1) => {

  const element = useRef();
  useEffect(()=>{
    if(typeof duration !== 'number' || typeof delay !== 'number'){
      return;
    }else{
      if(element.current){
        const {current} = element;
        current.style.transition = `opacity ${duration}s ${delay}s`;
        current.style.opacity = 1;      
      }      
    }

    },[])

  return {ref:element, style:{opacity:0}}
}


const App = () => {
  const fadeTitle = useFadeIn();
  const fadeDesc = useFadeIn(2,2);
  return(
    <>
    <div className="App">
      <h1 {...fadeTitle}>Hello</h1>
      <div {...fadeDesc}>This is text</div>
    </div>
    </>    
  )
}
ReactDOM.render(
    <App />,
  document.getElementById('root')
);
