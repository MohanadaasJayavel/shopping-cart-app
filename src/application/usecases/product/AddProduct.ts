import { Product } from "@domain/product/Product";
import { ProductService } from "@domain/product/ProductService";

export class AddProduct {
  constructor(
    private readonly productService: ProductService
  ) {}

  async execute(
    id: string,
    name: string,
    price: number
  ): Promise<Product> {
    const product = new Product(
      id,
      name,
      price
    );

    await this.productService.create(product);

    return product;
  }
}