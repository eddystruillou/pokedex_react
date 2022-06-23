import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Pokemon, PokemonData } from '../../model';

export const pokemoApiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://pokeapi.co/api/v2/',
  }),
  endpoints: builder => ({
      fetchPokemons: builder.query<Pokemon[], number | void>({
        query: (limit = 10) => ({
          url: `pokemon/?limit=${limit}`
        }),
        transformResponse: ({ results }: {results: Pokemon[]}) => results,
      }),
      fetchPokemonDetails: builder.query<PokemonData, string | void>({
        query: (name) => ({
          url: `pokemon/${name}/`,
        })
      })
  })
});

export const { useFetchPokemonsQuery, useFetchPokemonDetailsQuery } = pokemoApiSlice;

