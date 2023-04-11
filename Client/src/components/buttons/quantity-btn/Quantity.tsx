import { Dispatch, SetStateAction } from 'react';
import './quantity.css';

interface Props {
  productId?: number;
  qty: number;
  add?: (productId: number) => void;
  remove?: (productId: number) => void;
  setQty?: Dispatch<SetStateAction<number>>;
}

export default function Quantity({ productId, qty, add, remove, setQty }: Props) {

  function inputChange(e: { target: HTMLInputElement }) {
    const updated: number = Number(e.target.value);

    if (updated >= 0) {
      setQty && setQty(updated);
      return updated;
    }
  }

  return (
    <div className="quantity_btn">
      <div
        className="decrease qty_btn"
        onClick={() =>
          productId
            ? remove && remove(productId)
            : setQty && setQty((prevState: number) => prevState > 0 ? prevState - 1 : 0)
        }
      >
        -
      </div>
      <input type="text" value={qty} onChange={inputChange} />
      <div
        className="increase qty_btn"
        onClick={() =>
          productId
            ? add && add(productId)
            : setQty && setQty((prevState: number) => prevState + 1)
        }
      >
        +
      </div>
    </div>
  );
}
