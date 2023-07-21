import { useEffect, useState } from 'react'

import { Game } from '../Home'
import ProductsList from '../../components/ProductsList'

const Categories = () => {
  const [gamesAction, setGamesAction] = useState<Game[]>([])
  const [gamesSports, setGamesSports] = useState<Game[]>([])
  const [gamesSimulation, setGamesSimulation] = useState<Game[]>([])
  const [gamesFight, setGamesFight] = useState<Game[]>([])
  const [gamesRPG, setGamesRPG] = useState<Game[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/acao')
      .then((res) => res.json())
      .then((res) => setGamesAction(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/esportes')
      .then((res) => res.json())
      .then((res) => setGamesSports(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/simulacao')
      .then((res) => res.json())
      .then((res) => setGamesSimulation(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/luta')
      .then((res) => res.json())
      .then((res) => setGamesFight(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/rpg')
      .then((res) => res.json())
      .then((res) => setGamesRPG(res))
  })
  return (
    <>
      <ProductsList background="black" title="Ação" games={gamesAction} />
      <ProductsList background="gray" title="Esportes" games={gamesSports} />
      <ProductsList
        background="black"
        title="Simulação"
        games={gamesSimulation}
      />
      <ProductsList background="gray" title="Luta" games={gamesFight} />
      <ProductsList background="black" title="RPG" games={gamesRPG} />
    </>
  )
}

export default Categories
