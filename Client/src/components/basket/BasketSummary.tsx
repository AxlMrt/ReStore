import { useStoreContext } from '../../app/context/StoreContext';
import './basket.css'

export default function BasketSummary() {
  const { basket } = useStoreContext();
  const count = basket?.items.reduce((item, sum) => item + (sum.price * sum.quantity), 0);
  const total = (count! / 100).toFixed(2);
  
  
  return (
    <div className="basket_summary">
      <h4>Basket summary</h4>
      <div className="shipping">
        <h5>Total products</h5>
        <span>{total}$</span>
      </div>
      <div className="shipping">
        <h5>Shipping</h5>
        <span>0$</span>
      </div>
      <div className="shipping">
        <h5>Coupon</h5>
        <span>0$</span>
      </div>
      <div className="shipping">
        <h4>Grand Total</h4>
        <span>{total}$</span>
      </div>
      <a href="">Proceed to checkout</a>
    </div>
  );
}
