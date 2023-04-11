import "./singleProduct.css";
import { Product } from "../../app/models/product";
import { useEffect, useState } from "react";
import { useStoreContext } from "../../app/context/StoreContext";
import { useParams } from "react-router-dom";
import Quantity from "../buttons/quantity-btn/Quantity";
import agent from "../../app/api/agent";

interface Props {
  product: Product;
}

export default function SingleProduct({ product }: Props) {
  const { basket, setBasket, removeItem } = useStoreContext();
  const { id } = useParams<{ id: string }>();
  const [quantity, setQuantity] = useState(0);
  const [submitting, setSubmitting] = useState(false);

  const item = basket?.items.find((i) => i.productId === product?.id);
  useEffect(() => {
    if (item) setQuantity(item.quantity);
  }, [item]);

  function handleUpdateCart() {
    setSubmitting(true);
    if (!item || quantity > item.quantity) {
      const updatedQuantity = item ? quantity - item.quantity : quantity;
      agent.Basket.addItem(product?.id!, updatedQuantity)
        .then((basket) => setBasket(basket))
        .catch((error) => console.log(error))
        .finally(() => setSubmitting(false));
    } else {
      const updatedQuantity = item.quantity - quantity;
      agent.Basket.removeItem(product?.id, updatedQuantity)
        .then(() => removeItem(product?.id, updatedQuantity))
        .catch((error) => console.log(error))
        .finally(() => setSubmitting(false));
    }
  }

  return (
    <div className="product">
      <div className="product_details">
        <div className="product_img">
          <img src={product.pictureUrl} alt="" />
        </div>
        <div className="product_desc">
          <div>
            <h3>{product.name}</h3>
            <span>{(product.price / 100).toFixed(2)} $</span>
          </div>
          <div>
            <p>{product.description}</p>
          </div>
          <div className="product_btn">
            <Quantity qty={quantity} setQty={setQuantity} />
            <a
              href="#"
              className="btn41-43 btn-41"
              onClick={handleUpdateCart}
              style={
                item?.quantity === quantity || !item && quantity === 0
                  ? {
                      pointerEvents: "none",
                      background: "lightgray",
                      color: "gray",
                      borderColor: "lightgray",
                    }
                  : {}
              }
            >
              {item ? "Update" : "Shop now"}
            </a>
          </div>
          <p>
            {product.brand}, {product.type}
          </p>
        </div>
      </div>
    </div>
  );
}
