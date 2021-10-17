import { useState, useEffect } from "react";
import ProductList from "../components/products/ProductList";

function AllProductsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedProducts, setLoadedProducts] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    fetch(
      "https://1ull7204d9.execute-api.ap-south-1.amazonaws.com/dev/products/"
    )
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        setIsLoading(false);
        setLoadedProducts(responseData.data);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Products</h1>
      <ProductList products={loadedProducts}></ProductList>
    </section>
  );
}

export default AllProductsPage;
