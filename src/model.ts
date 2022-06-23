/**
 * Type return from the BE with limit query
 */
export interface Pokemon {
    name: string;
    url: string;
}

/**
 * Type of data return for one pokemon
 */
export interface PokemonStats {
    name: string;
    sprites: {
        other: {
            dream_world: {
                front_default: string;
            }
        }
    };
    stats: []
    base_stat: number;
    stat: {
        name: string;
    }
}

/**
 * Deprecated, used in Card component, to be removed
 */
export interface PokemonLimit {
    name: string;
    url: string;
}

/**
 * Type used in Item component
 */
export interface PokemonData {
    name: string;
    sprites: {
        front_default: string
    };
}