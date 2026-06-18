import { describe, it, expect } from "vitest";

const BASE_URL = "http://localhost:4321";

describe("Cart API", () => {
  it("GET /api/cart should return cart", async () => {
    const response = await fetch(`${BASE_URL}/api/cart`);

    expect(response.status).toBe(200);

    const cart = await response.json();

    expect(cart).toBeDefined();
  });

  it("POST /api/cart/items should add item", async () => {
    const response = await fetch(`${BASE_URL}/api/cart/items`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        productId: "1",
        quantity: 1,
      }),
    });

    expect(response.status).toBe(200);

    const cart = await response.json();

    expect(cart.items.length).toBeGreaterThan(0);
  });

  it("DELETE /api/cart/items/:id should remove item", async () => {
    await fetch(`${BASE_URL}/api/cart/items`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        productId: "1",
        quantity: 1,
      }),
    });

    const response = await fetch(`${BASE_URL}/api/cart/items/1`, {
      method: "DELETE",
      headers: {
        Origin: BASE_URL,
      },
    });

    expect(response.status).toBe(200);

    const cart = await response.json();

    console.log("BODY:", JSON.stringify(cart));

    const item = cart.items.find((i: any) => i.productId === "1");

    expect(item).toBeUndefined();
  });

  it("PUT should fail for invalid quantity", async () => {
    const response = await fetch(`${BASE_URL}/api/cart/items/1`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        quantity: 0,
      }),
    });

    expect(response.status).toBe(400);
  });
});
