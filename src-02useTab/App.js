import React from 'react';
// import {useInput} from './useInput';

const useInput  = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (e) => {
    const {target:{value}} = e;
    // 조건 실행
    let willUpdate = true;
    if(typeof validator === 'function'){
      // 함수 실행
      willUpdate = validator(value);
    }
    if(willUpdate){
      setValue(value);
    }
  }
  return {value, onChange};
}


const App = () => {
  // 함수 인자 전달, boolean
  const validator = (value) => value.length < 10; 
  // 인자 정의
  const name = useInput('Mr.', validator);
  return(
    <>
      <input placeholder="name" {...name}/>
    </>    
  )
}

export default App;