import { useState, useEffect } from 'react';
import { Product } from '../../app/models/product';
import SingleProduct from '../products/Products';
import './catalog.css';

export default function Catalog() {
	const [products, setProducts] = useState<Product[]>([]);

	useEffect(() => {
		fetch('http://localhost:5000/api/products')
			.then((response) => response.json())
			.then((data) => setProducts(data));
	}, []);

	return (
		<section className='products_container'>
			{products.map((product: Product) => {
				return <SingleProduct product={product} key={product.id} />;
			})}
		</section>
	);
}
