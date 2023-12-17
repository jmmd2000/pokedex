/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Pokemon } from "~/types";

import { api } from "~/utils/api";

export default function Home() {
  return (
    <>
      <Head>
        <title>Pokédex</title>
        <meta name="description" content="Pokedex for the Kanto Pokemon" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-zinc-100 via-white to-zinc-100">
        <h1 className="text-center text-4xl font-bold">Pokédex</h1>
      </main>
    </>
  );
}
