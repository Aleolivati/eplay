import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'

import {
  useGetOnSaleGamesQuery,
  useGetSoonGamesQuery
} from '../../services/api'

const Home = () => {
  const { data: onSaleGames, isLoading: isLoadingOnSale } =
    useGetOnSaleGamesQuery()
  const { data: soonGames, isLoading: isLoadingSoon } = useGetSoonGamesQuery()

  // const [promotions, setPromotions] = useState<Game[]>([])
  // const [commingSoon, setCommingSoon] = useState<Game[]>([])

  // useEffect(() => {
  //   fetch('https://fake-api-tau.vercel.app/api/eplay/promocoes')
  //     .then((res) => res.json())
  //     .then((res) => setPromotions(res))

  //   fetch('https://fake-api-tau.vercel.app/api/eplay/em-breve')
  //     .then((res) => res.json())
  //     .then((res) => setCommingSoon(res))
  // }, [])

  return (
    <>
      <Banner />
      <ProductsList
        background="gray"
        title="Promoções"
        games={onSaleGames}
        id="on-sale"
        isLoading={isLoadingOnSale}
      />
      <ProductsList
        background="black"
        title="Em breve"
        games={soonGames}
        id="coming-soon"
        isLoading={isLoadingSoon}
      />
    </>
  )
}

export default Home
