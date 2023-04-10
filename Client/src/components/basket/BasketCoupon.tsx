import React from 'react'
import './basket.css'

export default function BasketCoupon() {
  return (
    <div className="basket_summary">
      <h4>Coupon Code</h4>

      <div className='coupon'>
        <h5>Enter your coupon code if you have one</h5>
        <input type="text" />
      </div>

      <a href="">Apply Coupon</a>
    </div>
  );
}
