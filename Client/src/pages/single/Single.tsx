import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Banner from "../../components/banner/Banner";
import NotFound from "../../app/errors/NotFound";
import LoadingComponent from "../../app/global/LoadingComponent";
import SingleProduct from "../../components/product/SingleProduct";
import { useAppDispatch, useAppSelector } from "../../app/store/configureStore";
import {
  fetchProductAsync,
  productSelectors,
} from "../../app/store/slice/catalogSlice";

export default function Single() {
  const { id } = useParams<{ id: string }>();
  const { status: productStatus } = useAppSelector((state) => state.catalog);
  const dispatch = useAppDispatch();
  const product = useAppSelector((state) =>
    productSelectors.selectById(state, Number(id))
  );

  useEffect(() => {
    if (!product) dispatch(fetchProductAsync(Number(id)));
  }, [id, dispatch, product]);

  if (productStatus.includes('pending')) return <LoadingComponent message="Loading product..." />;
  if (!product) return <NotFound />;

  return (
    <section>
      <Banner name={product.name} />
      <SingleProduct product={product} />
    </section>
  );
}
