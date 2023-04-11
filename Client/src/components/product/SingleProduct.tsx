import { Product } from "../../app/models/product";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/store/configureStore";
import {  addBasketItemAsync, removeBasketItemAsync } from "../basket/basketSlice";
import Quantity from "../buttons/quantity-btn/Quantity";
import "./singleProduct.css";

interface Props {
  product: Product;
}

export default function SingleProduct({ product }: Props) {
  const { basket } = useAppSelector((state) => state.basket);
  const dispatch = useAppDispatch();
  const [quantity, setQuantity] = useState(0);

  const item = basket?.items.find((i) => i.productId === product?.id);
  useEffect(() => {
    if (item) setQuantity(item.quantity);
  }, [item]);

  function handleUpdateCart() {
    if (!item || quantity > item.quantity) {
      const updatedQuantity = item ? quantity - item.quantity : quantity;
      dispatch(addBasketItemAsync({ productId: product.id, quantity: updatedQuantity }));
    } else {
      const updatedQuantity = item.quantity - quantity;
      dispatch(removeBasketItemAsync({ productId: product.id, quantity: updatedQuantity }));
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
