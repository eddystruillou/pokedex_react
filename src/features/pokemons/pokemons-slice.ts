import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PokemonFormatedData } from '../../model';

interface PokemonsState {
    pokemons: PokemonFormatedData[];
}

const initialState: PokemonsState = {
    pokemons: []
}

export const pokemonsSlice = createSlice({
    name: "pokemons",
    initialState,
    reducers: {
        setPokemon: (state, { payload } : PayloadAction<PokemonFormatedData[]>) => {
            state.pokemons = payload;
        },
        followPokemon: (state, { payload } : PayloadAction<number>) => {
            state.pokemons = state.pokemons.map((pokemon: PokemonFormatedData) => {
                if(pokemon.id === payload) {
                    return {
                        ...pokemon,
                        isFollow: !pokemon.isFollow
                    };
                } else {
                    return pokemon
                }
            })
        }
    }
});

export const { setPokemon, followPokemon } = pokemonsSlice.actions;
export default pokemonsSlice.reducer;