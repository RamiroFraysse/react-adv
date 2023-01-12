import { onChangeArgs, Product } from './../interfaces/interfaces';
import { useEffect, useRef, useState } from 'react'

interface useProductArgs {
  product:Product;
  onChange?: (args:onChangeArgs) => void;
  value?:number;
}

export default function useProduct({onChange,product,value=0}:useProductArgs) {
  const [counter, setCounter] = useState(value);
  const isControlled = useRef(!!onChange)
  const increaseBy = (value: number) => {
    if(isControlled.current){
      return onChange!({count:value,product})
    }
    const newValue = Math.max(counter + value,0)
    setCounter(newValue);
    onChange && onChange({count:newValue,product});
  };
  useEffect(()=>{
    setCounter(value);
  },[value])
  return {
    counter,
    increaseBy
  }
}
