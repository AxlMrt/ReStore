import { useEffect, useState } from 'react';
import { Product } from '../../app/models/product';
import { useParams } from 'react-router-dom';
import agent from '../../app/api/agent';
import NotFound from '../../app/errors/NotFound';
import './singleProduct.css';
import LoadingComponent from '../../app/layout/global/LoadingComponent';

export default function SingleProduct() {
	const { id } = useParams<{ id: string }>();
	const [product, setProduct] = useState<Product | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		id && agent.Collection.details(parseInt(id))
			.then((response) => setProduct(response))
			.catch((error) => console.log(error))
			.finally(() => setLoading(false));
	}, [id]);

	if (loading) return <LoadingComponent message='Loading product...' />;
	if (!product) return <NotFound />

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
