import {
  useGetOnSaleGamesQuery,
  useGetSoonGamesQuery
} from '../../services/api'

import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'

export interface GalleryItem {
  type: 'image' | 'video'
  url: string
}

export type Game = {
  id: number
  name: string
  description: string
  release_date?: string
  prices: {
    discount?: number
    old?: number
    current?: number
  }
  details: {
    category: string
    system: string
    developer: string
    publisher: string
    languages: string[]
  }
  media: {
    thumbnail: string
    cover: string
    gallery: GalleryItem[]
  }
}

const Home = () => {
  const { data: promotions } = useGetOnSaleGamesQuery()
  const { data: commingSoon } = useGetSoonGamesQuery()

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

  if (promotions && commingSoon) {
    return (
      <>
        <Banner />
        <ProductsList
          background="gray"
          title="Promoções"
          games={promotions}
          id="on-sale"
        />
        <ProductsList
          background="black"
          title="Em breve"
          games={commingSoon}
          id="coming-soon"
        />
      </>
    )
  }

  return <h4>Carregando ...</h4>
}

export default Home
