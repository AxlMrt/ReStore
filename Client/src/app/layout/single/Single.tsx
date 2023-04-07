import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Banner from "../../../components/banner/Banner";
import agent from "../../api/agent";
import NotFound from "../../errors/NotFound";
import { Product } from "../../models/product";
import LoadingComponent from "../global/LoadingComponent";
import SingleProduct from "../../../components/product/SingleProduct";

export default function Single() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    id &&
      agent.Collection.details(parseInt(id))
        .then((response) => setProduct(response))
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <LoadingComponent message="Loading product..." />;
  if (!product) return <NotFound />;
  return (
    <section>
      <Banner id={ id } />
      <SingleProduct product={product} />
    </section>
  );
}
