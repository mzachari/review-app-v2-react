import ProductRatingStars from "../products/ProductRatingStars";
import classes from "./ReviewList.module.css";

function ReviewList(props) {
  return (
    <section>
      <h4>Reviews</h4>
      {props.reviews.map((review) => (
        <div className="d-flex align-items-center" key={review.reviewId}>
          <ProductRatingStars avgRating={review.rating} />
          <span className={classes.rating + " ml-3"}>{review.rating}</span>
          {review.reviewText}
        </div>
      ))}
    </section>
  );
}

export default ReviewList;
