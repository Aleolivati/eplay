import { useParams } from 'react-router-dom'

import Gallery from '../../components/Gallery'
import Hero from '../../components/Hero'
import Section from '../../components/Section'
import Loader from '../../components/Loader'

import { useGetGameQuery } from '../../services/api'

type GameParams = {
  id: string
}

const Products = () => {
  const { id } = useParams() as GameParams

  const { data: game } = useGetGameQuery(id)

  // const [game, setGame] = useState<Game>()

  // useEffect(() => {
  //   fetch(`https://fake-api-tau.vercel.app/api/eplay/jogos/${id}`)
  //     .then((res) => res.json())
  //     .then((res) => setGame(res))
  // }, [id])

  if (!game) {
    return <Loader />
  }

  return (
    <>
      <Hero game={game} />
      <Section background="black" title="Sobre o jogo">
        <p>{game.description}</p>
      </Section>
      <Section background="gray" title="Mais detalhes">
        <p>
          <b>Plataforma:</b> {game.details.system} <br />
          <b>Desenvolvedor:</b> {game.details.developer} <br />
          <b>Editora:</b> {game.details.publisher} <br />
          <b>Idiomas:</b> O jogo oferece suporte a diversos idiomas, incluindo{' '}
          {game.details.languages.join(', ')}
        </p>
      </Section>
      <Gallery
        defaultCover={game.media.cover}
        name={game.name}
        items={game.media.gallery}
      />
    </>
  )
}

export default Products
