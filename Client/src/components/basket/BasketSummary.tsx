import { useStoreContext } from '../../app/context/StoreContext';
import ValidButton from '../buttons/valid-btn/ValidButton';
import './basket.css'

export default function BasketSummary() {
  const { basket } = useStoreContext();
  const count: number | undefined = basket?.items.reduce((item, sum) => item + (sum.price * sum.quantity), 0);
  const total: number = Number((count! / 100).toFixed(2));

  const freeDelivery: boolean = true;
  const shipping: number = freeDelivery ? 0 : 4;

  const isCoupon: boolean = false;
  const percent: number = isCoupon ? 10 : 0;
  const coupon: number = isCoupon ? (total / percent) : 0;

  return (
    <div className="basket_summary">
      <h4>Basket summary</h4>
      <div className="shipping">
        <h5>Total products</h5>
        <span>{total}$</span>
      </div>
      <div className="shipping">
        <h5>Shipping</h5>
        <span>{shipping}$</span>
      </div>
      <div className="shipping">
        <h5>Coupon</h5>
        <span>- {coupon}$</span>
      </div>
      <div className="shipping">
        <h4>Grand Total</h4>
        <span>{total + shipping - coupon }$</span>
      </div>
      <ValidButton href="/checkout" message="Proceed to checkout" />
    </div>
  );
}
