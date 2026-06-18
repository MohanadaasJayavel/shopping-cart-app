export class CartItem {
  constructor(
    public readonly productId: string,
    public quantity: number
  ) {
    this.validate();
  }

  updateQuantity(quantity: number): void {
    this.quantity = quantity;
    this.validate();
  }

  private validate(): void {
    if (this.quantity < 1) {
      throw new Error(
        "Quantity must be greater than zero"
      );
    }
  }
}