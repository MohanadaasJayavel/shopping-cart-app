import { describe, it, expect } from "vitest";

const BASE_URL =
  "http://localhost:4321";

describe("Products API", () => {

  it("GET /api/products should return products", async () => {

    const response =
      await fetch(
        `${BASE_URL}/api/products`
      );

    expect(response.status)
      .toBe(200);

    const products =
      await response.json();

    expect(
      Array.isArray(products)
    ).toBe(true);
  });

  it("POST /api/products should create product", async () => {

    const response =
      await fetch(
        `${BASE_URL}/api/products`,
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json"
          },
          body: JSON.stringify({
            name: "Integration Product",
            price: 9999
          })
        }
      );

    expect(response.status)
      .toBe(201);

    const product =
      await response.json();

    expect(product.name)
      .toBe(
        "Integration Product"
      );
  });

  it("POST /api/products should fail with invalid data", async () => {

    const response =
      await fetch(
        `${BASE_URL}/api/products`,
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json"
          },
          body: JSON.stringify({
            name: "",
            price: -1
          })
        }
      );

    expect(response.status)
      .toBe(400);
  });

});