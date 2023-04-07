import './singleProduct.css';
import { Product } from "../../app/models/product";

interface Props {
  product: Product;
}

export default function SingleProduct({ product }: Props) {
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
