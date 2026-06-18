import { describe, it, expect, beforeEach } from "vitest";

import { Cart } from "../../domain/cart/Cart";
import { CartService } from "../../domain/cart/CartService";
import { InMemoryCartRepository } from "../../infrastructure/repositories/InMemoryCartRepository";

describe("CartService", () => {
  let repository: InMemoryCartRepository;
  let service: CartService;

  beforeEach(() => {
    repository = new InMemoryCartRepository();
    service = new CartService(repository);
  });

  it("should return cart", async () => {
    const cart =
      await service.getCart();

    expect(cart).toBeDefined();
    expect(cart.items.length)
      .toBeGreaterThanOrEqual(0);
  });

  it("should save cart", async () => {
    const cart =
      new Cart("cart-1");

    cart.addItem(
      "product-1",
      2
    );

    await service.save(cart);

    const saved =
      await service.getCart();

    expect(saved.items.length)
      .toBe(1);
  });
});