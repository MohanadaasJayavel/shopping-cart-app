export class Product {
  constructor(
    public readonly id: string,
    public name: string,
    public price: number
  ) {
    this.validate();
  }

  update(name: string, price: number): void {
    this.name = name;
    this.price = price;

    this.validate();
  }

  private validate(): void {
    if (!this.name.trim()) {
      throw new Error("Product name is required");
    }

    if (this.price <= 0) {
      throw new Error("Price must be greater than zero");
    }
  }
}