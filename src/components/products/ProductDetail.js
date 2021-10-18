import { useState } from "react";
import NewReviewForm from "../reviews/NewReviewForm";
import ReviewList from "../reviews/ReviewList";
import CustomDialog from "../ui/CustomDialog";
import classes from "./ProductDetail.module.css";
import ProductRating from "./ProductRating";

function ProductDetail(props) {
  const [isAddReviewDialogOpen, setIsAddReviewDialogOpen] = useState(false);

  const onAddReviewBtnClick = () => {
    setIsAddReviewDialogOpen(true);
  };

  const onAddReviewDialogClosed = () => {
    setIsAddReviewDialogOpen(false);
  };

  return (
    <section>
      <div>{props.product.title}</div>
      <div className={classes.productSubTitle}>
        <ProductRating reviews={props.product.reviews} />
        <button className="btn btn-primary" onClick={onAddReviewBtnClick}>
          Add Review
        </button>
      </div>
      <hr />
      <ReviewList reviews={props.product.reviews || []} />
      {isAddReviewDialogOpen && (
        <CustomDialog
          title="What's your rating?"
          onClose={onAddReviewDialogClosed}
        >
          <NewReviewForm productId={props.product.productId} onSubmit={onAddReviewDialogClosed} />
        </CustomDialog>
      )}
    </section>
  );
}
export default ProductDetail;
