import { useState, useContext, useEffect } from "react";
import WebSocketContext from "../../store/websocket-context";

import NewReviewForm from "../reviews/NewReviewForm";
import ReviewList from "../reviews/ReviewList";
import CustomDialog from "../ui/CustomDialog";
import classes from "./ProductDetail.module.css";
import ProductRating from "./ProductRating";

function ProductDetail(props) {
  const [isAddReviewDialogOpen, setIsAddReviewDialogOpen] = useState(false);
  const [product, setProduct] = useState(props.product);
  const websocketCtx = useContext(WebSocketContext);

  useEffect(() => {
    websocketCtx.client.onmessage = (message) => {
      const newReview = JSON.parse(message.data);
      if (newReview.productId === product.productId) {
        product.reviews = product.reviews.concat([newReview]);
        setProduct(JSON.parse(JSON.stringify(product)));
      }
    };
  });

  const onAddReviewBtnClick = () => {
    setIsAddReviewDialogOpen(true);
  };

  const onAddReviewDialogClosed = (newReview) => {
    if (newReview) {
      websocketCtx.sendMessage(newReview);
    }
    setIsAddReviewDialogOpen(false);
  };

  return (
    <section>
      <h2>{product.title}</h2>
      <div className={classes.productSubTitle}>
        <ProductRating reviews={product.reviews} />
        <button className="btn btn-primary" onClick={onAddReviewBtnClick}>
          Add Review
        </button>
      </div>
      <hr />
      <ReviewList reviews={product.reviews || []} />
      {isAddReviewDialogOpen && (
        <CustomDialog
          title="What's your rating?"
          onClose={onAddReviewDialogClosed}
        >
          <NewReviewForm
            productId={product.productId}
            onSubmit={onAddReviewDialogClosed}
          />
        </CustomDialog>
      )}
    </section>
  );
}
export default ProductDetail;
