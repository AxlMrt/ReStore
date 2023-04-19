import { Product } from "../../app/models/product";
import { useAppSelector } from "../../app/store/configureStore";
import Products from "../products/Products";
import Skeleton from "../skeleton/Skeleton";
import "./catalog.css";

interface Props {
  products: Product[];
}

export default function Catalog({ products }: Props) {
  const { metaData, status } = useAppSelector(
    (state) => state.catalog
  );

  if (status.includes("pending") || !metaData) {
    [...Array(12)].map((x, i) => <Skeleton key={i} />);
  }

  return (
    <div className="products_container">
      {products.map((product: Product) => {
        return <Products product={product} key={product.id} />;
      })}
    </div>
  );
}
