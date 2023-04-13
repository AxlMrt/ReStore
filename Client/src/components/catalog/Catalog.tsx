import { Product } from "../../app/models/product";
import Products from "../products/Products";
import "./catalog.css";

interface Props {
  products: Product[];
}

export default function Catalog({ products }: Props) {
  return (
    <div className="products_container">
      {products.map((product: Product) => {
          return <Products product={product} key={product.id} />;
      })}
    </div>
  );
}
