import { Cart } from "../../../domain/cart/Cart";
import { CartService } from "../../../domain/cart/CartService";

export class GetCart {
  constructor(
    private readonly cartService: CartService
  ) {}

  async execute(): Promise<Cart> {
    return this.cartService.getCart();
  }
}