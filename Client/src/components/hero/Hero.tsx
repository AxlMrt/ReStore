import './hero.css';
import heroImg from '../../assets/images/model2.png';

export default function Hero() {
	return (
		<section className='hero'>
			<div className='hero_banner'>
				<span>Smart Products</span>
				<h2>New offer</h2>
				<h3>2024 Collection</h3>

        <div>
          <a href='/buttons/41' className='btn41-43 btn-41'>
            Shop Now
          </a>
        </div>
			</div>
			<img src={heroImg} alt='hero-banner' />
		</section>
	);
}
