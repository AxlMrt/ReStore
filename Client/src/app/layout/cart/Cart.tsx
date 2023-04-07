import BasketTable from '../../../components/basket/Basket'
import Banner from '../../../components/banner/Banner'
import './cart.css'

export default function Basket() {
  return (
    <section>
      <Banner />
      <div className='basket'>
        <BasketTable />
      </div>
    </section>
  )
}
