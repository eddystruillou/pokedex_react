/**
 * Type of data return for one pokemon
 */
export interface PokemonData {
    id: number;
    name: string;
    sprites: {
        front_default: string
        other: {
            dream_world: {
                front_default: string;
            }
        }
    };
    stats: PokemonStats[]
}

/**
 * Type of pokemon stats
 */
export interface PokemonStats {
    base_stat: number;
    stat: {
        name: string;
    }
}

/**
 * Type of data return from the limit query
 */
export interface PokemonLimit {
    name: string;
    url: string;
}

/**
 * Type of formated data in a simpler format
 */
export interface PokemonFormatedData {
    id: number;
    name: string;
    tilePicture: string;
    modalPicture: string;
    stats: PokemonStats[];
    isFollow: boolean;
}