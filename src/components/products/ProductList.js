import ProductListItem from "./ProductListItem";
import classes from "./ProductList.module.css";

function ProductList(props) {
  return (
    <ul className={classes.list}>
      {props.products.map((product) => (
        <ProductListItem
          key={product.productId}
          title={product.title}
          id={product.productId}
        />
      ))}
    </ul>
  );
}
export default ProductList;
