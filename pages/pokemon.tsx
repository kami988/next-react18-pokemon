import type { NextPage } from 'next'
import { Suspense, useMemo } from 'react'
import { PokemonClient } from 'pokenode-ts'
import Layout from 'components/Layout'
import Loading from 'components/atoms/Loading'

const Home: NextPage = () => {
  const pokemonData = useMemo(() => {
    return new PokemonClient({
      cacheOptions: { maxAge: 10000, exclude: { query: false } },
    })
  }, [])

  return (
    <Layout title='Home'>
      <Suspense fallback={<Loading />}></Suspense>
    </Layout>
  )
}

export default Home
