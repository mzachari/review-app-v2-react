import "./App.css";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import AllProductsPage from "./pages/AllProducts";
import ProductPage from "./pages/Product";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <AllProductsPage />
        </Route>
        <Route path="/product/:productId">
          <ProductPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
