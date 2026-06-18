import { Product } from "@domain/product/Product";
import { ProductService } from "@domain/product/ProductService";

export class UpdateProduct {
  constructor(
    private readonly productService: ProductService
  ) {}

  async execute(
    id: string,
    name: string,
    price: number
  ): Promise<Product> {
    const existing =
      await this.productService.getById(id);

    if (!existing) {
      throw new Error("Product not found");
    }

    existing.update(name, price);

    await this.productService.update(existing);

    return existing;
  }
}