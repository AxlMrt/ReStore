import { useEffect, useState } from 'react';
import { Product } from '../../app/models/product';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './singleProduct.css';

export default function SingleProduct() {
	const { id } = useParams<{ id: string }>();
	const [product, setProduct] = useState<Product | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		axios
			.get(`http://localhost:5000/api/products/${id}`)
			.then((response) => setProduct(response.data))
			.catch((error) => console.log(error))
			.finally(() => setLoading(false));
	}, [id]);

	if (loading) return <h3>Loading...</h3>;
	if (!product) return <h3>Product not found</h3>

	return (
		<div className='product'>
			<div className='product_details'>
				<div className='product_img'>
					<img src={product.pictureUrl} alt='' />
				</div>
				<div className='product_desc'>
					<div>
						<h3>{product.name}</h3>
						<span>{(product.price / 100).toFixed(2)} $</span>
					</div>
					<div>
						<p>{product.description}</p>
					</div>
					<a href='/buttons/41' className='btn41-43 btn-41'>
						Shop Now
					</a>
					<p>
						{product.brand}, {product.type}
					</p>
				</div>
			</div>
		</div>
	);
}
