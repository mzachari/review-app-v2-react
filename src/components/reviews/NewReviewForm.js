import { useRef } from "react";
import ReactStars from "react-rating-stars-component";

import classes from "./NewReviewForm.module.css";

function NewReviewForm(props) {
  const reviewTextRef = useRef();
  let newRatingValue = 0;
  const ratingChanged = (newRating) => {
    newRatingValue = newRating;
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    const newReview = {
      rating: newRatingValue,
      reviewText: reviewTextRef.current.value,
    };
    fetch(
      "https://sasxhpisr2.execute-api.ap-south-1.amazonaws.com/dev/reviews/" +
        props.productId,
      {
        method: "POST",
        body: JSON.stringify(newReview),
        headers: {
          "Content-type": "application/json",
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        props.onSubmit(responseData.data);
      });
  };

  return (
    <form className={classes.form} onSubmit={onFormSubmit}>
      <div className={classes.control}>
        <h4>Rating</h4>
        <ReactStars
          size={32}
          activeColor="#ffd700"
          isHalf={true}
          onChange={ratingChanged}
        />
      </div>
      <div className={classes.control}>
        <h4>Review</h4>
        <textarea
          id="description"
          required
          rows="5"
          ref={reviewTextRef}
        ></textarea>
      </div>
      <button className="btn btn-success">Submit</button>
    </form>
  );
}

export default NewReviewForm;
