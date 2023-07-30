import Loader from '../../components/Loader'
import ProductsList from '../../components/ProductsList'

import {
  useGetActionGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: action, isLoading: isLoadingAction } = useGetActionGamesQuery()
  const { data: sport, isLoading: isLoadingSport } = useGetSportGamesQuery()
  const { data: simulation, isLoading: isLoadingSimulation } =
    useGetSimulationGamesQuery()
  const { data: fight, isLoading: isLoadingFight } = useGetFightGamesQuery()
  const { data: rpg, isLoading: isLoadingRpg } = useGetRpgGamesQuery()

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
          isLoading={isLoadingAction}
        />
        <ProductsList
          background="gray"
          title="Esportes"
          games={sport}
          id="sports"
          isLoading={isLoadingSport}
        />
        <ProductsList
          background="black"
          title="Simulação"
          games={simulation}
          id="simulation"
          isLoading={isLoadingSimulation}
        />
        <ProductsList
          background="gray"
          title="Luta"
          games={fight}
          id="fight"
          isLoading={isLoadingFight}
        />
        <ProductsList
          background="black"
          title="RPG"
          games={rpg}
          id="rpg"
          isLoading={isLoadingRpg}
        />
      </>
    )
  }

  return <Loader />
}

export default Categories
