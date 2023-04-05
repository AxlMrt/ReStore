import { useState, useEffect } from 'react';
import { Product } from '../../app/models/product';
import Products from '../products/Products';
import agent from '../../app/api/agent';
import './catalog.css';
import LoadingComponent from '../../app/layout/global/LoadingComponent';

export default function Catalog() {
	const [products, setProducts] = useState<Product[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		agent.Collection.list()
			.then(products => setProducts(products))
			.catch((error) => console.log(error))
			.finally(() => setLoading(false));
			
	}, []);

	if (loading) return <LoadingComponent />
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
