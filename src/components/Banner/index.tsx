import { useEffect, useState } from 'react'

import { Game } from '../../pages/Home'
import Tag from '../Tag'
import Button from '../Button'
import { formatPrice } from '../ProductsList'
import { Image, Price, Title } from './styles'

const Banner = () => {
  const [game, setGame] = useState<Game>()

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/destaque')
      .then((res) => res.json())
      .then((res) => setGame(res))
  }, [])

  if (!game) {
    return <h3>Carregando ...</h3>
  }

  return (
    <Image style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <Title>{game.name}</Title>
          <Price>
            De <span>{formatPrice(game.prices.old)}</span> <br />
            Por apenas {formatPrice(game.prices.current)}
          </Price>
        </div>
        <Button
          type="link"
          to={`/product/${game.id}`}
          title="Clique aqui para aproveitar a oferta"
        >
          Aproveitar
        </Button>
      </div>
    </Image>
  )
}

export default Banner
