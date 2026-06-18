import { CartItem } from "./CartItem";

export class Cart {
  constructor(
    public readonly id: string,
    public items: CartItem[] = []
  ) {}

  addItem(productId: string, quantity: number): void {
    const existing = this.items.find(
      item => item.productId === productId
    );

    if (existing) {
      existing.quantity += quantity;
      return;
    }

    this.items.push(
      new CartItem(productId, quantity)
    );
  }

  removeItem(productId: string): void {
    this.items = this.items.filter(
      item => item.productId !== productId
    );
  }

  updateQuantity(
    productId: string,
    quantity: number
  ): void {
    const item = this.items.find(
      i => i.productId === productId
    );

    if (!item) {
      throw new Error("Cart item not found");
    }

    item.updateQuantity(quantity);
  }
}