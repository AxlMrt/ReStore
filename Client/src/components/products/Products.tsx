import { Link } from "react-router-dom";
import { Product } from "../../app/models/product";
import { useState } from "react";
import { toast } from "react-toastify";
import agent from "../../app/api/agent";
import "./products.css";
import { useStoreContext } from "../../app/context/StoreContext";

interface Props {
  product: Product;
}

export default function Products({ product }: Props) {
  const { setBasket } = useStoreContext();

  function handleAddItem(productId: number) {
    agent.Basket.addItem(productId)
      .then((basket) => setBasket(basket))
      .catch((error) => console.log(error))
    toast.success("Added to the cart!");
  }

  return (
    <div className="card">
      <div className="card_img">
        <img src={product.pictureUrl} alt="product" />
        <button className="card_btn" onClick={() => handleAddItem(product.id)}>
					Add to cart
        </button>
      </div>
      <div className="card_desc">
        <Link to={`/collection/${product.id}`}>{product.name}</Link>
        <p>{(product.price / 100).toFixed(2)} $</p>
      </div>
    </div>
  );
}
