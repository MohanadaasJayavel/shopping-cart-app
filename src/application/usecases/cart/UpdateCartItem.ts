import { CartService } from "../../../domain/cart/CartService";

export class UpdateCartItem {
  constructor(
    private readonly cartService: CartService
  ) {}

  async execute(
    productId: string,
    quantity: number
  ) {
    if (quantity < 1) {
      throw new Error(
        "Quantity must be greater than zero"
      );
    }

    const cart =
      await this.cartService.getCart();

    cart.updateQuantity(
      productId,
      quantity
    );

    await this.cartService.save(cart);

    return cart;
  }
}