import { describe, it, expect } from "vitest";
import { Product } from "../../domain/product/Product";

describe("Product", () => {
  it("should create valid product", () => {
    const product = new Product(
      "1",
      "Laptop",
      50000
    );

    expect(product.name)
      .toBe("Laptop");
  });

  it("should throw when price <= 0", () => {
    expect(() =>
      new Product(
        "1",
        "Laptop",
        0
      )
    ).toThrow();
  });
});