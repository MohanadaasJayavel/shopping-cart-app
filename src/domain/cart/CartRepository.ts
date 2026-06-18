import { Cart } from "./Cart";

export interface CartRepository {
  save(cart: Cart): Promise<void>;

  getCart(): Promise<Cart>;
}