import { useState } from 'react'
import { Product, ProductInCart } from '../interfaces/interfaces';

function useShoppingCart() {
  const [shoppingCart, setShoppingCart] = useState(new Map<string,ProductInCart>());

  const handleProductCountChange = ({
    count,
    product,
  }: {
    count: number;
    product: Product;
  }) => {
    setShoppingCart((oldShoppingCart: Map<string, ProductInCart>) => {
      const productInCart: ProductInCart = oldShoppingCart.get(product.id) || {
          ...product,
          count: 0,
      };
      const newShoppingCart = new Map(oldShoppingCart);
      if (Math.max(productInCart.count + count, 0) > 0) {
        productInCart.count += count;
        newShoppingCart.set(product.id, productInCart);
      }else{
        newShoppingCart.delete(product.id)
      }
      return newShoppingCart;
    });
  };
  return {
    shoppingCart,
    handleProductCountChange
  }
}

export default useShoppingCart