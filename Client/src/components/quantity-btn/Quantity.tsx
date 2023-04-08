import './quantity.css';

interface Props {
  qty: number
}

export default function Quantity({ qty }: Props) {
  return (
    <div className='quantity_btn'>
      <div className='decrease qty_btn'>-</div>
      <input type="text" value={qty}/>
      <div className='increase qty_btn'>+</div>
    </div>
  )
}
