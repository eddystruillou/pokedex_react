import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PokemonLimit, PokemonData, PokemonFormatedData } from '../../model';

//TODO UPDATE RTK QUERY SKILL TO MANAGE STORE PROPERLY
export const pokemoApiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://pokeapi.co/api/v2/',
  }),
  endpoints: builder => ({
      /**
       * Call the api with de limit parameter to get a list of pokemon with his name and url 
       * to get more information about id
       */
      fetchPokemons: builder.query<PokemonLimit[], number | void>({
        query: (limit = 10) => ({
          url: `pokemon/?limit=${limit}`
        }),
        transformResponse: ({ results }: {results: PokemonLimit[]}) => results,
      }),
      /**
       * Call the api with the name of the pokemon to get all the information about it
       */
      fetchPokemonDetails: builder.query<PokemonFormatedData, string | void>({
        query: (name) => ({
          url: `pokemon/${name}/`,
        }),
        transformResponse: (result: PokemonData) => {
          return formatPokemonData(result)
        },
      })
  })
});

/**
 * Returns pokemon information in a modified format to simplify the data model
 * @param {PokemonData} data - Object that contain all information of a pokemon
 * @returns 
 */
const formatPokemonData = (data: PokemonData) => {
  return {
    id: data && data.id ? data.id : 0,
    name: data && data.name ? data.name : "",
    img: data && data.sprites && data.sprites.front_default ? data.sprites.front_default : "",
    isFollow: false
  }
}

export const { useFetchPokemonsQuery, useFetchPokemonDetailsQuery } = pokemoApiSlice;

