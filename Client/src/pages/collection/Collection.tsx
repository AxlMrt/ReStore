import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../app/store/configureStore";
import {
  productSelectors,
  fetchProductsAsync,
  fetchFilters,
  setPageNumber,
} from "../../app/store/slice/catalogSlice";
import Banner from "../../components/banner/Banner";
import Catalog from "../../components/catalog/Catalog";
import SideBar from "../../components/filterOptions/SideBar";
import TopBar from "../../components/filterOptions/TopBar";
import Pagination from "../../components/pagination/Pagination";
import "./collection.css";

export default function Collection() {
  const products = useAppSelector(productSelectors.selectAll);
  const {
    productsLoaded,
    filtersLoaded,
    metaData,
  } = useAppSelector((state) => state.catalog);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!productsLoaded) dispatch(fetchProductsAsync());
  }, [productsLoaded, dispatch]);

  useEffect(() => {
    if (!filtersLoaded) dispatch(fetchFilters());
  }, [filtersLoaded, dispatch]);

  

  return (
    <>
      <Banner name="Shop" />
      <main>
        <div className="collection_container">
          <SideBar />
          <section className="collection_product">
            <TopBar/>
            <Catalog products={products} />
            <Pagination metaData={metaData} onPageChange={(page: number) => dispatch(setPageNumber({pageNumber: page}))} />
          </section>
        </div>
      </main>
    </>
  );
}
