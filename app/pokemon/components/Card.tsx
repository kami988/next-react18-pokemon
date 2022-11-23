'use client'
import React from 'react'
import Image from 'next/image'

import Endpoints from '../../../utils/endpoints.constants'

type Props = {
  pokemon: { name: string; url: string }
}

export const Card = (props: Props) => {
  return (
    <a
      href={Endpoints.POKEMON_DOMAIN(props.pokemon.name)}
      target='_blank'
      rel='noopener noreferrer'
    >
      <Image
        alt={`${props.pokemon.name} image`}
        src={Endpoints.POKEMON_IMG_DOMAIN(props.pokemon.name)}
        width={70}
        height={70}
      />
      <div className='gallery__item__caption'>
        {props.pokemon.name[0].toUpperCase() + props.pokemon.name.slice(1)}
      </div>
    </a>
  )
}
