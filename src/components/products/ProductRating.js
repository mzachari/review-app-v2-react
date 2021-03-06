import { useEffect, useState } from "react";
import ProductRatingStars from "./ProductRatingStars";

function ProductRating(props) {
  const [isRatingComputed, setIsRatingComputed] = useState(false);
  const [avgRating, setAvgRating] = useState(0);

  useEffect(() => {
    if (props.reviews && props.reviews.length) {
      setAvgRating(roundHalf(computeAvgRating()));
      setIsRatingComputed(true);
    }

    function computeAvgRating() {
      let ratingSum = 0;
      for (const review of props.reviews) {
        ratingSum += review.rating;
      }

      return Math.round((ratingSum / props.reviews.length) * 100) / 100;
    }
  }, [props.reviews]);

  function roundHalf(num) {
    return Math.round(num * 2) / 2;
  }
  return (
    <section>
      <div className="d-flex align-items-center">
        {avgRating > 0 && <h3 className="mb-0 mr-3">{avgRating}</h3>}
        {isRatingComputed && <ProductRatingStars avgRating={avgRating} />}
      </div>
    </section>
  );
}
export default ProductRating;
