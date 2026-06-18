import { Cart } from "./Cart";
import type { CartRepository } from "./CartRepository";

export class CartService {
  constructor(
    private readonly repository: CartRepository
  ) {}

  async getCart(): Promise<Cart> {
    return this.repository.getCart();
  }

  async save(cart: Cart): Promise<void> {
    await this.repository.save(cart);
  }
}