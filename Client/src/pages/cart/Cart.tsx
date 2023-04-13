import BasketTable from '../../components/basket/Basket'
import Banner from '../../components/banner/Banner'
import BasketSummary from '../../components/basket/BasketSummary'
import BasketCoupon from '../../components/basket/BasketCoupon';
import './cart.css'

export default function Basket() {
  return (
    <>
      <Banner name="Cart" />
      <main className="basket">
        <BasketTable />
        <section className='summary'>
          <BasketCoupon />
          <BasketSummary />
        </section>
      </main>
    </>
  );
}
