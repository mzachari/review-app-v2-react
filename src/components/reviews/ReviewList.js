import { useEffect, useState } from "react";
import ProductRatingStars from "../products/ProductRatingStars";
import classes from "./ReviewList.module.css";

function ReviewList(props) {
  const [reviews, setReviews] = useState(props.reviews);

  useEffect(() => {
    setReviews(props.reviews);
  }, [props.reviews]);
  return (
    <section>
      <h4>Reviews</h4>
      {reviews.map((review) => (
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
