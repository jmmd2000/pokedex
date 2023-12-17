import Link from "next/link";
import { useState, type PropsWithChildren } from "react";
import { Pokemon } from "~/types";
import { api } from "~/utils/api";
import Image from "next/image";
// import { Analytics } from "@vercel/analytics/react";

export const Layout = (props: PropsWithChildren) => {
  return (
    <div>
      <main>{props.children}</main>
      <Pokebar />
      {/* <Analytics /> */}
    </div>
  );
};

const Pokebar = () => {
  const [offset, setOffset] = useState(0);
  const { data } = api.pokemon.fetch151.useQuery({ limit: 11, offset: offset });
  return (
    <div className="fixed bottom-0 flex h-[160px] w-full flex-row items-center justify-between p-4">
      <div className="flex flex-row space-x-2">
        {data?.pokemonData.map((pokemon: Pokemon) => (
          <PokemonCard pokemon={pokemon} key={pokemon.name} />
        ))}
      </div>
      <div className="flex space-x-2">
        <button
          className="rounded bg-zinc-500 px-4 py-2 font-bold text-white hover:bg-zinc-400 disabled:bg-gray-300"
          onClick={() => setOffset(offset - 10)}
          disabled={offset === 0}
        >
          Previous
        </button>
        <button
          className="rounded bg-zinc-500 px-4 py-2 font-bold text-white hover:bg-zinc-400 disabled:bg-gray-300"
          onClick={() => setOffset(offset + 10)}
          disabled={offset === 140}
        >
          Next
        </button>
      </div>
    </div>
  );
};

const PokemonCard = (props: { pokemon: Pokemon }) => {
  const { pokemon } = props;
  const { data } = api.pokemon.fetchPokemon.useQuery({
    name: pokemon.name,
    onlyImage: true,
  });

  return (
    <>
      {data && (
        <div className="flex flex-col items-center justify-center space-y-2 bg-red-50">
          <Image
            src={data}
            alt={pokemon.name}
            loading="lazy"
            width={96}
            height={96}
          />
          <Link
            href={`/pokemon/${pokemon.name}`}
            key={pokemon.name}
            legacyBehavior
          >
            <a className="font-bold capitalize">{pokemon.name}</a>
          </Link>
        </div>
      )}
    </>
  );
};
