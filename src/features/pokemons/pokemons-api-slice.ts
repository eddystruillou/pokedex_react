import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface Pokemon {
  results: [
    {
      name: string;
      url: string;
    }
  ]
}

interface PokemonDetails {
  name: string;
    sprites: {
        front_default: string
    };
}

export const pokemoApiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://pokeapi.co/api/v2/',
  }),
  endpoints: builder => ({
      fetchPokemons: builder.query<Pokemon, number | void>({
        query(limit = 10) {
          return `pokemon/?limit=${limit}`;
        },
      }),
      fetchPokemonDetails: builder.query<PokemonDetails, string | void>({
        query(name) {
          return `pokemon/${name}/`
        }
      })
  })
});

export const { useFetchPokemonsQuery, useFetchPokemonDetailsQuery } = pokemoApiSlice;

