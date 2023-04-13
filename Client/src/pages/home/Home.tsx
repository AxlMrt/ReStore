import Catalog from '../../components/catalog/Catalog';
import Hero from '../../components/hero/Hero';
import Support from '../../components/support/Support';
import './home.css'
import Deals from '../../components/catalog/deals/Deals';
import { useEffect } from 'react';
import { Product } from '../../app/models/product';
import { useAppSelector, useAppDispatch } from '../../app/store/configureStore';
import { productSelectors, fetchProductsAsync } from '../../app/store/slice/catalogSlice';

export default function Home() {
	const products = useAppSelector(productSelectors.selectAll).slice(0, 8);
  const { productsLoaded } = useAppSelector((state) => state.catalog);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!productsLoaded) dispatch(fetchProductsAsync());
  }, [productsLoaded, dispatch]);

  return (
    <>
      <Hero />
      <main>
        <Support />
        <Deals />
        <Catalog products={products} />
      </main>
    </>
  );
}
