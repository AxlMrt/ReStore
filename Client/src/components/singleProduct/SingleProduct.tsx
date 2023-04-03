import React from 'react';
import { Product } from '../../app/models/product';
import './singleProduct.css';

interface Props {
	isOpen: boolean;
  product: Product;
  onClose: () => void;
}

export default function SingleProduct({ isOpen, product, onClose }: Props) {
	return (
		<div
			className='product_modal'
      style={isOpen ? { display: 'flex' } : { display: 'none' }}
      onClick={onClose}
		>
			<div className='product_details' onClick={(e) => e.stopPropagation()}>
				<img src={product.pictureUrl} alt='' />
				<div>
					<h3>{product.name}</h3>
					<span>{(product.price / 100).toFixed(2)} $</span>
				</div>
				<p>{product.description}</p>
			</div>
		</div>
	);
}
