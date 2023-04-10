import ValidButton from '../buttons/valid-btn/ValidButton';
import './basket.css'

export default function BasketCoupon() {
  return (
    <div className="basket_summary">
      <h4>Coupon Code</h4>

      <div className='coupon'>
        <h5>Enter your coupon code if you have one</h5>
        <input type="text" placeholder='Your coupon code'/>
      </div>

      <ValidButton href="" message="Apply Coupon" />
    </div>
  );
}
