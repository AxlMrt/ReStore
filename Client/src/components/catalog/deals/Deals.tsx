import { Link } from 'react-router-dom';
import '../catalog.css'

export default function Deals() {
  return (
    <div className="catalog">
      <h2>Daily deals!</h2>
      <div className="products_filter">
        <Link to="/collection">Discover our products!</Link>
      </div>
    </div>
  );
}
