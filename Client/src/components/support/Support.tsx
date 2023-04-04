import { FaShippingFast } from 'react-icons/fa';
import { Ri24HoursFill, RiMoneyEuroCircleLine } from 'react-icons/ri';
import { CiDiscount1 } from 'react-icons/ci';
import './support.css'

export default function Support() {
	const supports = [
		{
			icon: <FaShippingFast size={50} />,
			title: 'Free Shipping',
			desc: 'Free shipping on all order',
		},
		{
			icon: <Ri24HoursFill size={50} />,
			title: 'Support 24/7',
			desc: 'Free shipping on all order',
		},
		{
			icon: <RiMoneyEuroCircleLine size={50} />,
			title: 'Money Return',
			desc: 'Free shipping on all order',
		},
		{
			icon: <CiDiscount1 size={50} />,
			title: 'Order Discount',
			desc: 'Free shipping on all order',
		},
	];
  return (
    <div className='support'>
      {
        supports.map((support) => {
          return (
            <div key={support.title}>
              {support.icon}
              <div>
                <h4>{support.title}</h4>
                <p>{support.desc}</p>
              </div>
            </div>
          )
        })
      }
    </div>
  );
}
