import { render, screen } from "@testing-library/react";
import ProductDetail from "./ProductDetail";

let product = {};

beforeAll(() => {
  product = {
    website: "https://git-scm.com/book/en/v2",
    published: "2014-11-18T00:00:00.000Z",
    creationTime: "2021-10-15T17:10:28.177Z",
    isbn: "9781484200766",
    subtitle: "Everything you neeed to know about Git",
    lastUpdatedTime: "2021-10-15T17:10:28.177Z",
    pages: 458,
    publisher: "Apress; 2nd edition",
    description:
      "Pro Git (Second Edition) is your fully-updated guide to Git and its usage in the modern world. Git has come a long way since it was first developed by Linus Torvalds for Linux kernel development. It has taken the open source world by storm since its inception in 2005, and this book teaches you how to use it like a pro.",
    productId: "ddb6e684-5239-45c2-a271-312316ed4d9d",
    author: "Scott Chacon and Ben Straub",
    title: "Pro Git",
    reviews: [
      {
        reviewText: "great one!\n",
        rating: 4.5,
        productId: "ddb6e684-5239-45c2-a271-312316ed4d9d",
        reviewId: "e780fb06-3fce-4bb0-93d1-638b53e05d59",
      },
    ],
  };
});

describe("ProductDetail Component", () => {
  test("renders product title", async () => {
      render(<ProductDetail product={product}/>);

      const productTitleElement = screen.getByText(product.title);
      expect(productTitleElement).toBeInTheDocument();
  });
});
