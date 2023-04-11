import { Link } from "react-router-dom";
import { Product } from "../../app/models/product";
import { toast } from "react-toastify";
import { useAppDispatch } from "../../app/store/configureStore";
import { addBasketItemAsync } from "../basket/basketSlice";
import "./products.css";

interface Props {
  product: Product;
}

export default function Products({ product }: Props) {
  const dispatch = useAppDispatch();

  function handleAddItem() {
    dispatch(addBasketItemAsync({ productId: product.id }));
    toast.success("Added to the cart!");
  }

  return (
    <div className="card">
      <div className="card_img">
        <img src={product.pictureUrl} alt="product" />
        <button className="card_btn" onClick={() => handleAddItem()}>
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
