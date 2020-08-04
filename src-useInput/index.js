import React ,{useState} from 'react';
import ReactDOM from 'react-dom';
//useInput
const useInput  = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (e) => {
    const {target:{value}} = e;
    // 조건 실행
    let willUpdate = true;
    if(typeof validator === 'function'){
      // 함수 실행
      willUpdate = validator(value);   
      //console.log(willUpdate)  
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
  console.log(validator('1111111111'))
  // 인자 정의
  const name = useInput('Mr.', validator);
  return(
    <>
      <input placeholder="name" {...name}
      />
    </>    
  )
}

//01useInput
ReactDOM.render(
    <App />,
  document.getElementById('root')
);
