import type { Category, Product } from "../src/type-alias";

describe("Type Alias", () => {
  it("should be support in typescript", () => {
    const category: Category = {
      id: 1,
      name: "Handphone",
    };

    const product: Product = {
      id: 1,
      name: "Samsung Galaxy S23",
      price: 1000000,
      category,
    };

    console.info(category);
    console.info(product);
  });
});
