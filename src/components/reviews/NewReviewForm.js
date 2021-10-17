import { useRef } from "react";

import classes from "./NewReviewForm.module.css";
import Card from "../ui/Card";

function NewReviewForm(props) {
  const reviewTextRef = useRef();

  return (
    <Card>
      <form className={classes.form}>
        <div className={classes.control}>
          <textarea
            id="description"
            required
            rows="5"
            ref={reviewTextRef}
          ></textarea>
        </div>
      </form>
    </Card>
  );
}

export default NewReviewForm;
