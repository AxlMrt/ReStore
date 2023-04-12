import {  useEffect } from "react";
import { Product } from "../../app/models/product";
import { useAppDispatch, useAppSelector } from "../../app/store/configureStore";
import { fetchProductsAsync, productSelectors } from "../../app/store/slice/catalogSlice";
import Products from "../products/Products";
import "./catalog.css";

export default function Catalog() {
  const products = useAppSelector(productSelectors.selectAll);
  const { productsLoaded } = useAppSelector((state) => state.catalog);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!productsLoaded) dispatch(fetchProductsAsync());
  }, [productsLoaded, dispatch]);

  return (
    <div className="catalog">
      <h2>Daily deals!</h2>
      <div className="products_filter">
        <span>New Arrivals</span>
        <span>Best Sellers</span>
      </div>
      <div className="products_container">
        {products.map((product: Product) => {
          return <Products product={product} key={product.id} />;
        })}
      </div>
    </div>
  );
}
