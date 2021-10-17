import Card from "../ui/Card";
import classes from "./ProductListItem.module.css";

function ProductListItem(props) {
  function onProductSelected() {
    console.log("Button Clicked");
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
