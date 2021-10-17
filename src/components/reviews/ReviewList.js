import classes from "./ReviewList.module.css";

function ReviewList(props) {
  return (
    <section>
      <h4>Reviews</h4>
      {props.reviews.map((review) => (
        <p key={review.reviewId}>
          <span className={classes.rating}>{review.rating}</span>
          {review.reviewText}
        </p>
      ))}
    </section>
  );
}

export default ReviewList;
