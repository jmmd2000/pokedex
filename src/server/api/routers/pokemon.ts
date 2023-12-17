import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { PokemonDetail, type Pokemon, type PokemonApiResponse } from "~/types";

export const pokemonRouter = createTRPCRouter({
  fetch151: publicProcedure
    .input(z.object({ offset: z.number(), limit: z.number() }))
    .query(async ({ input }) => {
      const { offset, limit } = input;
      const maxLimit = 151;
      const adjustedLimit = Math.min(limit, maxLimit - offset);

      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${adjustedLimit}`,
        );
        if (!response.ok) {
          throw new Error("Failed to fetch Pokémon data");
        }
        const data = (await response.json()) as PokemonApiResponse;

        // Adjust the next URL if the max limit is reached
        let nextUrl = data.next;
        if (offset + adjustedLimit >= maxLimit) {
          nextUrl = null; // Or adjust as needed
        }

        return {
          pokemonData: data.results,
          next: nextUrl,
          previous: data.previous,
          count: data.count,
        };
      } catch (error) {
        throw new Error("Failed to fetch data");
      }
    }),
  fetchPokemon: publicProcedure
    .input(z.object({ name: z.string(), onlyImage: z.boolean() }))
    .query(async ({ input }) => {
      const { name } = input;
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${name}`,
        );
        if (!response.ok) {
          throw new Error("Failed to fetch Pokémon data");
        }
        const data = (await response.json()) as PokemonDetail;

        if (input.onlyImage) {
          return data.sprites.front_default;
        }
      } catch (error) {
        throw new Error("Failed to fetch Pokémon data");
      }
    }),
});
