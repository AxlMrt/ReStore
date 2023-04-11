import Catalog from '../../components/catalog/Catalog';
import Hero from '../../components/hero/Hero';
import Support from '../../components/support/Support';
import './home.css'

export default function Home() {
  return (
		<>
			<Hero />
			<section className='home'>
				<Support />
				<Catalog />
			</section>
		</>
	);
}
