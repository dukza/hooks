import React, { useState } from 'react';


export const useInput  = (initialValue, validator) => {
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
  