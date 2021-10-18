import Card from "../ui/Card";
import classes from "./ProductListItem.module.css";
import { useHistory } from "react-router";
function ProductListItem(props) {
  const history = useHistory();

  function onProductSelected() {
    history.push(`/product/${props.productId}`);
  }
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.product}>
          <div>{props.title}</div>
          <button onClick={onProductSelected}>{">"}</button>
        </div>
      </Card>
    </li>
  );
}

export default ProductListItem;
