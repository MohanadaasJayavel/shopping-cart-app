import { CartService } from "../../../domain/cart/CartService";

export class RemoveItemFromCart {
  constructor(
    private readonly cartService: CartService
  ) {}

  async execute(
    productId: string
  ) {
    const cart =
      await this.cartService.getCart();

    cart.removeItem(productId);

    await this.cartService.save(cart);

    return cart;
  }
}