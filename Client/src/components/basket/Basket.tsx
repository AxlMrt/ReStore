import { Basket } from "../../app/models/basket";
import { TiDelete } from "react-icons/ti";
import { useStoreContext } from "../../app/context/StoreContext";
import Quantity from "../buttons/quantity-btn/Quantity";
import agent from "../../app/api/agent";
import "./basket.css";

export default function Basket() {
  const { basket, setBasket, removeItem } = useStoreContext();

  function handleAddItem(productId: number) {
    agent.Basket.addItem(productId)
      .then((basket) => setBasket(basket))
      .catch((error) => console.log(error));
  }

  function handleRemoveItem(productId: number, quantity: number = 1) {
    agent.Basket.removeItem(productId, quantity)
      .then(() => removeItem(productId, quantity))
      .catch((error) => console.log(error));
  }
  
  if (basket?.items.length === 0) return <h3>Your basket is empty</h3>;

  return (
    <div className="table_responsive">
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Product Name</th>
            <th>Unit Price</th>
            <th>QTY</th>
            <th>SubTotal</th>
            <th>Del</th>
          </tr>
        </thead>
        <tbody>
          {basket?.items.map((cart) => (
            <tr key={cart.name}>
              <td>
                <img src={cart.pictureUrl} alt="product-image" />
              </td>
              <td>{cart.name}</td>
              <td>{(cart.price / 100).toFixed(2)}$</td>
              <td>
                <Quantity
                  productId={cart.productId}
                  qty={cart.quantity}
                  add={handleAddItem}
                  remove={handleRemoveItem}
                />
              </td>
              <td>{((cart.price * cart.quantity) / 100).toFixed(2)}$</td>
              <td>
                <TiDelete size={25} onClick={() => handleRemoveItem(cart.productId, cart.quantity)}/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
