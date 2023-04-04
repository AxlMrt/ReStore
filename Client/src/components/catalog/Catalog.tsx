import { useState, useEffect } from 'react';
import { Product } from '../../app/models/product';
import axios from 'axios';
import SingleProduct from '../products/Products';
import './catalog.css';
import Products from '../products/Products';

export default function Catalog() {
	const [products, setProducts] = useState<Product[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		axios
			.get('http://localhost:5000/api/products')
			.then((response) => setProducts(response.data))
			.catch((error) => console.log(error))
			.finally(() => setLoading(false));
	}, []);

	return (
		<div className='catalog'>
			<h2>Daily deals!</h2>
			<div className='products_filter'>
				<span>New Arrivals</span>
				<span>Best Sellers</span>
			</div>
			<div className='products_container'>
				{products.map((product: Product) => {
					return <Products product={product} key={product.id} />;
				})}
			</div>
		</div>
	);
}
