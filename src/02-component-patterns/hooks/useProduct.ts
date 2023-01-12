import { onChangeArgs, Product } from './../interfaces/interfaces';
import { useEffect, useState } from 'react'

interface useProductArgs {
  product:Product;
  onChange?: (args:onChangeArgs) => void;
  value?:number;
}

export default function useProduct({onChange,product,value=0}:useProductArgs) {
  const [counter, setCounter] = useState(value);
  const increaseBy = (value: number) => {
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
