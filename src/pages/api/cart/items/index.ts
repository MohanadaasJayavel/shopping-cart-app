import type { APIRoute } from "astro";

import { cartService }
from "../../../../infrastructure/container";

import { AddItemToCart }
from "../../../../application/usecases/cart/AddItemToCart";

export const POST: APIRoute =
  async ({ request }) => {
    try {
      const body =
        await request.json();

      const useCase =
        new AddItemToCart(
          cartService
        );

      const cart =
        await useCase.execute(
          body.productId,
          body.quantity
        );

      return new Response(
        JSON.stringify(cart),
        {
          status: 200,
          headers: {
            "Content-Type":
              "application/json"
          }
        }
      );
    } catch (error) {
      return new Response(
        JSON.stringify({
          error:
            error instanceof Error
              ? error.message
              : "Unknown error"
        }),
        {
          status: 400
        }
      );
    }
  };