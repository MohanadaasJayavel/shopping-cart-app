import { ProductService } from "@domain/product/ProductService";

export class DeleteProduct {
  constructor(
    private readonly productService: ProductService
  ) {}

  async execute(id: string): Promise<void> {
    await this.productService.delete(id);
  }
}