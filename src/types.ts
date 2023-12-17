export type Pokemon = {
  name: string;
  url: string;
};

export type PokemonApiResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Pokemon[];
};

type Ability = {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
};

type Form = {
  name: string;
  url: string;
};

type GameIndex = {
  game_index: number;
  version: {
    name: string;
    url: string;
  };
};

type Move = {
  move: {
    name: string;
    url: string;
  };
  version_group_details: {
    level_learned_at: number;
    move_learn_method: {
      name: string;
      url: string;
    };
    version_group: {
      name: string;
      url: string;
    };
  }[];
};

type Species = {
  name: string;
  url: string;
};

type Stat = {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
};

type Type = {
  slot: number;
  type: {
    name: string;
    url: string;
  };
};

type SpriteVersionDetails = {
  back_default: string | null;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_female: string | null;
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
};

type GenerationSprites = {
  "red-blue": SpriteVersionDetails;
  yellow: SpriteVersionDetails;
  gold: SpriteVersionDetails;
  silver: SpriteVersionDetails;
  crystal: SpriteVersionDetails;
  "ruby-sapphire": SpriteVersionDetails;
  emerald: SpriteVersionDetails;
  "firered-leafgreen": SpriteVersionDetails;
  "diamond-pearl": SpriteVersionDetails;
  platinum: SpriteVersionDetails;
  "heartgold-soulsilver": SpriteVersionDetails;
  "black-white": SpriteVersionDetails;
  "black-2-white-2": SpriteVersionDetails;
  "x-y": SpriteVersionDetails;
  "omega-ruby-alpha-sapphire": SpriteVersionDetails;
  "sun-moon": SpriteVersionDetails;
  "ultra-sun-ultra-moon": SpriteVersionDetails;
  "lets-go-pikachu-lets-go-eevee": SpriteVersionDetails;
  "sword-shield": SpriteVersionDetails;
};

type Sprites = {
  back_default: string | null;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_female: string | null;
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
  other: {
    dream_world: {
      front_default: string | null;
      front_female: string | null;
    };
    home: {
      front_default: string | null;
      front_female: string | null;
      front_shiny: string | null;
      front_shiny_female: string | null;
    };
    "official-artwork": {
      front_default: string;
      front_shiny: string;
    };
  };
  versions: {
    [key in keyof GenerationSprites]: GenerationSprites;
  };
};

export type PokemonDetail = {
  abilities: Ability[];
  base_experience: number;
  forms: Form[];
  game_indices: GameIndex[];
  height: number;
  held_items: unknown[]; // Replace with specific type if available
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Move[];
  name: string;
  order: number;
  past_abilities: unknown[]; // Replace with specific type if available
  past_types: unknown[]; // Replace with specific type if available
  species: Species;
  sprites: Sprites;
  stats: Stat[];
  types: Type[];
  weight: number;
};
