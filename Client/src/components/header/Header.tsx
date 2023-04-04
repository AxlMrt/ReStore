import { Link } from 'react-router-dom';
import { BiCart } from 'react-icons/bi';
import './header.css';

export default function Header() {
	const navLinks = [
		{ title: 'Home', path: '/' },
		{ title: 'Collection', path: '/collection' },
		{ title: 'About', path: '/about' },
		{ title: 'Contact', path: '/contact' },
	];

	const userLinks = [
		{ title: 'Login', path: '/login' },
		{ title: 'Register', path: '/register' },
	];

	return (
		<header>
			<h1>AxlStore</h1>
			<input id='menu__toggle' type='checkbox' />
			<label className='menu__btn' htmlFor='menu__toggle'>
				<span></span>
			</label>

			<nav className='menu__box'>
				<div>
					{navLinks.map((link) => {
						return (
							<Link to={link.path} key={link.title} className='menu__item'>
								{link.title}
							</Link>
						);
					})}
				</div>
				<div>
					<div className='cart'>
						<div className='cart_icon'>
							<BiCart size={25} />
						</div>
						<div className='cart_num'>
							<span>4</span>
						</div>
					</div>
					{userLinks.map((link) => {
						return (
							<Link to={link.path} key={link.title} className='menu__item'>
								{link.title}
							</Link>
						);
					})}
				</div>
			</nav>
		</header>
	);
}


{/* ; */}