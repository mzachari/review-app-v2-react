import { render, screen } from "@testing-library/react";
import ReviewList from "./ReviewList";

describe("ReviewList Component", () => {
  test("renders review list when list not empty", async () => {
    const reviews = [
      {
        reviewText: "great one!\n",
        rating: 4.5,
        productId: "ddb6e684-5239-45c2-a271-312316ed4d9d",
        reviewId: "e780fb06-3fce-4bb0-93d1-638b53e05d59",
      },
    ];
    render(<ReviewList reviews={reviews} />);

    const listItemElements = await screen.findAllByRole("listitem");
    expect(listItemElements).not.toHaveLength(0);
  });

  test('renders "No reviews yet" as text when review list is empty', async () => {
    render(<ReviewList reviews={[]} />);

    const noReviewsElement = screen.getByText("No reviews yet!");
    expect(noReviewsElement).toBeInTheDocument();
  });
});
