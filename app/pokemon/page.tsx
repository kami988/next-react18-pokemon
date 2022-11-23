'use client'
import React from 'react'
import useSWR from 'swr'

import { CardList } from './components/CardList'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function Home() {
  const { data, error } = useSWR(`https://pokeapi.co/api/v2/pokemon?limit=200&offset=200`, fetcher)
  const [searchText, setSearchText] = React.useState<string>('')
  console.log(process.env.REACT_APP_POKEMON_API)
  if (!data) return <div>Loading..</div>

  if (error) return <div>Failed</div>

  const handleInputClick = (newtext: string) => {
    setSearchText(newtext)
  }

  return (
    <div className='App'>
      <div className='gallery'>
        <CardList data={data.results} search={searchText} />
      </div>
    </div>
  )
}
