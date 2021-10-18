import ReactStars from "react-rating-stars-component";

function ProductRatingStars(props) {
    console.log(props);
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <ReactStars
      edit={false}
      value={props.avgRating}
      size={32}
      activeColor="#ffd700"
      isHalf={true}
    />
  );
}
export default ProductRatingStars;
