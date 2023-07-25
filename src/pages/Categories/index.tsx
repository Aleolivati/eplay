import {
  useGetActionGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportGamesQuery
} from '../../services/api'

import ProductsList from '../../components/ProductsList'

const Categories = () => {
  const { data: action } = useGetActionGamesQuery()
  const { data: sport } = useGetSportGamesQuery()
  const { data: simulation } = useGetSimulationGamesQuery()
  const { data: fight } = useGetFightGamesQuery()
  const { data: rpg } = useGetRpgGamesQuery()

  // const [gamesAction, setGamesAction] = useState<Game[]>([])
  // const [gamesSports, setGamesSports] = useState<Game[]>([])
  // const [gamesSimulation, setGamesSimulation] = useState<Game[]>([])
  // const [gamesFight, setGamesFight] = useState<Game[]>([])
  // const [gamesRPG, setGamesRPG] = useState<Game[]>([])

  // useEffect(() => {
  //   fetch('https://fake-api-tau.vercel.app/api/eplay/acao')
  //     .then((res) => res.json())
  //     .then((res) => setGamesAction(res))

  //   fetch('https://fake-api-tau.vercel.app/api/eplay/esportes')
  //     .then((res) => res.json())
  //     .then((res) => setGamesSports(res))

  //   fetch('https://fake-api-tau.vercel.app/api/eplay/simulacao')
  //     .then((res) => res.json())
  //     .then((res) => setGamesSimulation(res))

  //   fetch('https://fake-api-tau.vercel.app/api/eplay/luta')
  //     .then((res) => res.json())
  //     .then((res) => setGamesFight(res))

  //   fetch('https://fake-api-tau.vercel.app/api/eplay/rpg')
  //     .then((res) => res.json())
  //     .then((res) => setGamesRPG(res))
  // })

  if (action && sport && simulation && fight && rpg) {
    return (
      <>
        <ProductsList
          background="black"
          title="Ação"
          games={action}
          id="action"
        />
        <ProductsList
          background="gray"
          title="Esportes"
          games={sport}
          id="sports"
        />
        <ProductsList
          background="black"
          title="Simulação"
          games={simulation}
          id="simulation"
        />
        <ProductsList background="gray" title="Luta" games={fight} id="fight" />
        <ProductsList background="black" title="RPG" games={rpg} id="rpg" />
      </>
    )
  }

  return <h4>Carregando ...</h4>
}

export default Categories
