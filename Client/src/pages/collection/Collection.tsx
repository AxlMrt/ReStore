import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/store/configureStore';
import { productSelectors, fetchProductsAsync, fetchFilters } from '../../app/store/slice/catalogSlice';
import Banner from '../../components/banner/Banner';
import Catalog from '../../components/catalog/Catalog';
import LoadingComponent from '../../app/global/LoadingComponent';
import './collection.css';
import SideBar from '../../components/filterOptions/SideBar';
import TopBar from '../../components/filterOptions/TopBar';

export default function Collection() {
  const products = useAppSelector(productSelectors.selectAll);
  const { productsLoaded, filtersLoaded, status } = useAppSelector((state) => state.catalog);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!productsLoaded) dispatch(fetchProductsAsync());
  }, [productsLoaded, dispatch]);
  
  useEffect(() => {
    if (!filtersLoaded) dispatch(fetchFilters());
  }, [filtersLoaded, dispatch]);

  if (status.includes('pending')) return <LoadingComponent message="Loading products.." />

  return (
    <>
      <Banner name="Shop" />
      <main>
        <div className='collection_container'>
          <SideBar />
          <section className='collection_product'>
            <TopBar />
            <Catalog products={products} />
          </section>
        </div>
      </main>
    </>
  );
}
