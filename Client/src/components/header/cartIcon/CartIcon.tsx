import React from 'react'
import { BiCart } from 'react-icons/bi';
import { Link } from 'react-router-dom';

interface Props {
  itemCount: number | undefined;
}

export default function CartIcon({ itemCount }: Props) {
  return (
    <div className="cart_container">
      <div className="cart">
        <Link to="/cart" className="cart_icon">
          <BiCart size={25} />
        </Link>
        <div className="cart_num">
          <span>{itemCount}</span>
        </div>
      </div>
    </div>
  );
}
