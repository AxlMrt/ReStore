import React, { useEffect, useState } from 'react'
import { Basket } from '../../app/models/basket'
import agent from '../../app/api/agent';
import LoadingComponent from '../../app/layout/global/LoadingComponent';
import './basket.css'

export default function Basket() {
  const [basket, setBasket] = useState<Basket | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    agent.Basket.get()
      .then((basket) => setBasket(basket))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <LoadingComponent message='Loading cart...' />
  if (!basket) return <h3>Your basket is empty</h3>

  return (
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
        {basket.items.map((cart) => (
          <tr key={cart.name}>
            <td><img src={cart.pictureUrl} alt="product-image" /></td>
            <td>{cart.name}</td>
            <td>{(cart.price / 100).toFixed(2)}$</td>
            <td>{cart.quantity}</td>
            <td>{((cart.price * cart.quantity) / 100 ).toFixed(2)}$</td>
            <td>X</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
