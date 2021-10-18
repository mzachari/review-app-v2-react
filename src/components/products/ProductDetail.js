import { useEffect, useState } from "react";
import ReviewList from "../reviews/ReviewList";
import classes from "./ProductDetail.module.css";

function ProductDetail(props) {
  const [avgRating, setAvgRating] = useState(0);

  useEffect(() => {
    if (props.product.reviews && props.product.reviews.length) {
      setAvgRating(computeAvgRating());
    }

    function computeAvgRating() {
      let ratingSum = 0;
      for (const review of props.product.reviews) {
        ratingSum += review.rating;
      }

      return Math.round((ratingSum / props.product.reviews.length) * 100) / 100;
    }
  }, []);

  return (
    <section>
      <div>{props.product.title}</div>
      <div className={classes.productSubTitle}>
        <div>{avgRating}</div>
        <button className="btn btn-primary">Add Review</button>
      </div>
      <hr />
      <ReviewList reviews={props.product.reviews || []} />
    </section>
  );
}
export default ProductDetail;
