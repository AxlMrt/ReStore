import './quantity.css';

interface Props {
  productId: number;
  qty: number;
  add: (productId: number) => void;
  remove: (productId: number) => void;
}

export default function Quantity({ productId, qty, add, remove }: Props) {
  function inputChange(e: { target: HTMLInputElement }) {
    const updated = e.target.value;

    return updated;
  }

  return (
    <div className="quantity_btn">
      <div className="decrease qty_btn" onClick={() => remove(productId)}>
        -
      </div>
      <input type="text" value={qty} onChange={inputChange}/>
      <div className="increase qty_btn" onClick={() => add(productId)}>
        +
      </div>
    </div>
  );
}
