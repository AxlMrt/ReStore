import { Link } from 'react-router-dom';
import { Product } from '../../app/models/product';
import SingleProduct from '../singleProduct/SingleProduct';
import './products.css';

interface Props {
	product: Product;
}

export default function Products({ product }: Props) {
	return (
		<div className='card'>
			<div className='card_img'>
				<img src={product.pictureUrl} alt='product' />
				<button className='card_btn'>Add to cart</button>
			</div>
			<div className='card_desc'>
				<Link to={`/collection/${product.id}`}>{product.name}</Link>
				<p>{(product.price / 100).toFixed(2)} $</p>
			</div>
		</div>
	);
}
