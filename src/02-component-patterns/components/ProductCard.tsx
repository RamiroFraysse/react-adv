import styles from "../styles/styles.module.css";
import useProduct from "../hooks/useProduct";
import { createContext } from "react";
import {
  ProductContextProps,
  ProductCardProps,
} from "../interfaces/interfaces";
export { ProductButtons, ProductImage, ProductTitle } from "../components";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export function ProductCard({ children, product }: ProductCardProps) {
  const { counter, increaseBy } = useProduct();

  return (
    <Provider value={{ product, increaseBy, counter }}>
      <div className={styles.productCard}>{children}</div>
    </Provider>
  );
}
