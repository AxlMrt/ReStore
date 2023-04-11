import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../../app/models/product";
import Banner from "../../components/banner/Banner";
import agent from "../../app/api/agent";
import NotFound from "../../app/errors/NotFound";
import LoadingComponent from "../../app/global/LoadingComponent";
import SingleProduct from "../../components/product/SingleProduct";

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
      <Banner name={product.name} />
      <SingleProduct product={product} />
    </section>
  );
}
