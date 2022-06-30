import React from 'react'
import { HeroList } from '../components/HeroList'

export const MarvelPage = () => {
  return (
    <>
      <h1>MarVel Page</h1>
     <hr></hr>
      <HeroList publisher={'Marvel Comics'} />
    </>
  )
}
