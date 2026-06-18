import { ProductService } from "@domain/product/ProductService";
import { Product } from "@domain/product/Product";

export class GetProduct {
  constructor(
    private readonly productService: ProductService
  ) {}

  async byId(
    id: string
  ): Promise<Product | null> {
    return this.productService.getById(id);
  }

  async all(): Promise<Product[]> {
    return this.productService.getAll();
  }
}