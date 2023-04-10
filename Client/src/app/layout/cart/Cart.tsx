import BasketTable from '../../../components/basket/Basket'
import Banner from '../../../components/banner/Banner'
import './cart.css'
import BasketSummary from '../../../components/basket/BasketSummary'
import BasketCoupon from '../../../components/basket/BasketCoupon';

export default function Basket() {
  return (
    <section>
      <Banner />
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
