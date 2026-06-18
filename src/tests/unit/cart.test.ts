import { describe, it, expect } from "vitest";
import { Cart } from "../../domain/cart/Cart";

describe("Cart", () => {
  it("should add item", () => {
    const cart = new Cart("1");

    cart.addItem("product-1", 2);

    expect(cart.items.length).toBe(1);
    expect(cart.items[0].quantity).toBe(2);
  });

  it("should increase quantity when adding same item", () => {
    const cart = new Cart("1");

    cart.addItem("product-1", 1);
    cart.addItem("product-1", 2);

    expect(cart.items.length).toBe(1);
    expect(cart.items[0].quantity).toBe(3);
  });

  it("should update quantity", () => {
    const cart = new Cart("1");

    cart.addItem("product-1", 1);

    cart.updateQuantity("product-1", 5);

    expect(cart.items[0].quantity).toBe(5);
  });

  it("should remove item", () => {
    const cart = new Cart("1");

    cart.addItem("product-1", 1);

    cart.removeItem("product-1");

    expect(cart.items.length).toBe(0);
  });
});