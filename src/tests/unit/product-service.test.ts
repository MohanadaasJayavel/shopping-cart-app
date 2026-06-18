import { describe, it, expect, beforeEach } from "vitest";

import { Product } from "../../domain/product/Product";
import { ProductService } from "../../domain/product/ProductService";
import { InMemoryProductRepository } from "../../infrastructure/repositories/InMemoryProductRepository";

describe("ProductService", () => {
  let repository: InMemoryProductRepository;
  let service: ProductService;

  beforeEach(() => {
    repository = new InMemoryProductRepository();
    service = new ProductService(repository);
  });

  it("should create a product", async () => {
    const product = new Product(
      "100",
      "Test Product",
      1000
    );

    await service.create(product);

    const saved =
      await service.getById("100");

    expect(saved).not.toBeNull();
    expect(saved?.name)
      .toBe("Test Product");
  });

  it("should not allow duplicate products", async () => {
    const product = new Product(
      "101",
      "Laptop",
      50000
    );

    await service.create(product);

    await expect(
      service.create(product)
    ).rejects.toThrow(
      "Product already exists"
    );
  });

  it("should update a product", async () => {
    const product = new Product(
      "102",
      "Mouse",
      500
    );

    await service.create(product);

    const updated = new Product(
      "102",
      "Gaming Mouse",
      1000
    );

    await service.update(updated);

    const result =
      await service.getById("102");

    expect(result?.name)
      .toBe("Gaming Mouse");
  });

  it("should delete a product", async () => {
    const product = new Product(
      "103",
      "Keyboard",
      1500
    );

    await service.create(product);

    await service.delete("103");

    const result =
      await service.getById("103");

    expect(result).toBeNull();
  });
});