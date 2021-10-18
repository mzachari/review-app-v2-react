import { useParams, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";

import ProductDetail from "../components/products/ProductDetail";
import NewReviewForm from "../components/reviews/NewReviewForm";

function ProductPage() {
  const { productId } = useParams();
  const history = useHistory();

  const [isLoading, setIsLoading] = useState(true);
  const [loadedProduct, setLoadedProduct] = useState([]);

  function showProductList() {
    history.replace("/");
  }

  useEffect(() => {
    setIsLoading(true);

    fetch(
      "https://1ull7204d9.execute-api.ap-south-1.amazonaws.com/dev/products/" +
        productId +
        "?fetchReviews=true"
    )
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        setLoadedProduct(responseData.data);
        setIsLoading(false);
      });
  }, [productId]);

  if (isLoading) {
    return (
      <section>
        <button className="btn btn-secondary mb-4" onClick={showProductList}>
          Show Product List
        </button>

        <p>Loading...</p>
      </section>
    );
  } else {
    console.log("Product Loaded", loadedProduct);

    return (
      <section>
        <button className="btn btn-secondary mb-4" onClick={showProductList}>
          Show Product List
        </button>
        <ProductDetail product={loadedProduct} />
        {/* <NewReviewForm /> */}
      </section>
    );
  }
}

export default ProductPage;
