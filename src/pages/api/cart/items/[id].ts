import type { APIRoute } from "astro";

import { cartService }
from "../../../../infrastructure/container";

import { UpdateCartItem }
from "../../../../application/usecases/cart/UpdateCartItem";

import { RemoveItemFromCart }
from "../../../../application/usecases/cart/RemoveItemFromCart";

export const PATCH: APIRoute =
  async ({
    params,
    request
  }) => {
    try {
      const body =
        await request.json();

      const useCase =
        new UpdateCartItem(
          cartService
        );

      const cart =
        await useCase.execute(
          params.id!,
          body.quantity
        );

      return new Response(
        JSON.stringify(cart),
        {
          status: 200
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

export const DELETE: APIRoute =
  async ({ params }) => {
    try {
      const useCase =
        new RemoveItemFromCart(
          cartService
        );

      const cart =
        await useCase.execute(
          params.id!
        );

      return new Response(
        JSON.stringify(cart),
        {
          status: 200
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