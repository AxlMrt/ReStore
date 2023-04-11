import BasketTable from '../../components/basket/Basket'
import Banner from '../../components/banner/Banner'
import BasketSummary from '../../components/basket/BasketSummary'
import BasketCoupon from '../../components/basket/BasketCoupon';
import './cart.css'

export default function Basket() {
  return (
    <section>
      <Banner name="Cart" />
      <div className="basket">
        <BasketTable />
        <div className='summary'>
          <BasketCoupon />
          <BasketSummary />
        </div>
      </div>
    </section>
  );
}
