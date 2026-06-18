import { CartService } from "../../../domain/cart/CartService";

export class AddItemToCart {
  constructor(
    private readonly cartService: CartService
  ) {}

  async execute(
    productId: string,
    quantity: number
  ) {
    if (!productId) {
      throw new Error("Product id is required");
    }

    if (quantity < 1) {
      throw new Error(
        "Quantity must be greater than zero"
      );
    }

    const cart =
      await this.cartService.getCart();

    cart.addItem(
      productId,
      quantity
    );

    await this.cartService.save(cart);

    return cart;
  }
}