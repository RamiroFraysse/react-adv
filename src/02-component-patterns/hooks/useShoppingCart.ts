import { useState } from 'react'
import { Product, ProductInCart } from '../interfaces/interfaces';

function useShoppingCart() {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCart;
  }>({});

  const handleProductCountChange = ({
    count,
    product,
  }: {
    count: number;
    product: Product;
  }) => {
    setShoppingCart((oldShoppingCart) => {
      if (count === 0) {
        const { [product.id]: toDelete, ...rest } = oldShoppingCart;
        return rest;
      }
      return {
        ...oldShoppingCart,
        [product.id]: { ...product, count },
      };
    });
  };
  return {
    shoppingCart,
    handleProductCountChange
  }
}

export default useShoppingCart