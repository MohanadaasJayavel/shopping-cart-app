import type { APIRoute } from "astro";

import { productService } from "../../../infrastructure/container";

import { UpdateProduct } from "../../../application/usecases/product/UpdateProduct";

import { DeleteProduct } from "../../../application/usecases/product/DeleteProduct";

import { GetProduct } from "../../../application/usecases/product/GetProduct";

import { ProductSchema } from "../../../types/productSchema";

export const GET: APIRoute = async ({ params }) => {
  try {
    const useCase = new GetProduct(productService);

    const product = await useCase.byId(params.id!);

    if (!product) {
      return new Response(
        JSON.stringify({
          error: "Product not found",
        }),
        {
          status: 404,
        },
      );
    }

    return new Response(JSON.stringify(product), {
      status: 200,
    });
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: error instanceof Error ? error.message : "Unknown error",
      }),
      {
        status: 500,
      },
    );
  }
};

export const PUT: APIRoute = async ({ request, params }) => {
  try {
    const body = await request.json();

    const validated = ProductSchema.parse(body);

    const useCase = new UpdateProduct(productService);

    const product = await useCase.execute(
      params.id!,
      validated.name,
      validated.price,
    );

    return new Response(JSON.stringify(product), {
      status: 200,
    });
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: error instanceof Error ? error.message : "Unknown error",
      }),
      {
        status: 400,
      },
    );
  }
};

export const DELETE: APIRoute = async ({ params }) => {
  try {
    const useCase = new DeleteProduct(productService);

    await useCase.execute(params.id!);

    return new Response(null, {
      status: 204,
    });
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: error instanceof Error ? error.message : "Unknown error",
      }),
      {
        status: 400,
      },
    );
  }
};
