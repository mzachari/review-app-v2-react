import ReviewList from "../reviews/ReviewList";
import classes from "./ProductDetail.module.css";
import ProductRating from "./ProductRating";

function ProductDetail(props) {
  return (
    <section>
      <div>{props.product.title}</div>
      <div className={classes.productSubTitle}>
        <ProductRating reviews={props.product.reviews} />
        <button className="btn btn-primary">Add Review</button>
      </div>
      <hr />
      <ReviewList reviews={props.product.reviews || []} />
    </section>
  );
}
export default ProductDetail;
