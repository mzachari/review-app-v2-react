import "./App.css";
import { Route, Switch } from "react-router-dom";

import AllProductsPage from "./pages/AllProducts";
import ProductPage from "./pages/Product";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllProductsPage />
        </Route>
        <Route path="/product/:productId">
          <ProductPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
