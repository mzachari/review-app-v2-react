import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import ProductDetail from "../components/products/ProductDetail";
import NewReviewForm from "../components/reviews/NewReviewForm";

function ProductPage() {
  const { productId } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [loadedProduct, setLoadedProduct] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    fetch(
      "https://1ull7204d9.execute-api.ap-south-1.amazonaws.com/dev/products/" +
        productId + "?fetchReviews=true"
    )
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        setIsLoading(false);
        setLoadedProduct(responseData.data);
      });
  }, [productId]);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <ProductDetail product={loadedProduct} />
      {/* <NewReviewForm /> */}
    </section>
  );
}

export default ProductPage;
