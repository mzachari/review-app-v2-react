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
      <ul className="px-0">
        {reviews.map((review) => (
          <li className="d-flex align-items-center" key={review.reviewId}>
            <ProductRatingStars avgRating={review.rating} />
            <span className={classes.rating + " ml-3"}>{review.rating}</span>
            {review.reviewText}
          </li>
        ))}
      </ul>

      {reviews.length === 0 && <p>No reviews yet!</p>}
    </section>
  );
}

export default ReviewList;
