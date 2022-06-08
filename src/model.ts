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

export interface PokemonLimit {
    name: string;
    url: string;
}