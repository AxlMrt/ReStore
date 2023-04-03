import { useState } from 'react';
import { Product } from '../../app/models/product';
import SingleProduct from '../singleProduct/SingleProduct';
import './products.css';

interface Props {
	product: Product;
}

export default function Products({ product }: Props) {
	const [isOpen, setIsOpen] = useState(false);
	const onClose = () => {
		setIsOpen(false);
	};

	return (
		<div className='card'>
			<SingleProduct isOpen={isOpen} product={product} onClose={onClose} />

			<img
				src={product.pictureUrl}
				alt='product'
				onClick={() => setIsOpen(true)}
			/>
			<div className='card_title'>
				<h3 onClick={() => setIsOpen(true)}>{product.name}</h3>
				<span>{(product.price / 100).toFixed(2)} $</span>
			</div>
			<button className='card_btn'>Add to cart</button>
		</div>
	);
}
