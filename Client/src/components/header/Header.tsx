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
		{ title: <BiCart size={25} />, path: '/cart' },
		{ title: 'Login', path: '/login' },
		{ title: 'Register', path: '/register' },
	];

	return (
		<header>
			<h1>AxlStore</h1>
			<nav>
				{navLinks.map((link) => {
					return (
						<Link to={link.path} key={link.title}>
							{link.title}
						</Link>
					);
				})}
			</nav>
			<div>
				{userLinks.map((link) => {
					return (
						<Link to={link.path} key={link.title}>
							{link.title}
						</Link>
					);
				})}
			</div>
		</header>
	);
}
