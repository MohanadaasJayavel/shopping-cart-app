import { Cart } from "../../domain/cart/Cart";
import type { CartRepository } from "../../domain/cart/CartRepository";

export class InMemoryCartRepository implements CartRepository {
  private cart = new Cart("default-cart");

  async save(cart: Cart): Promise<void> {
    this.cart = cart;
  }

  async getCart(): Promise<Cart> {
    return this.cart;
  }
}
