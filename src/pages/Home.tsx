import Banner from '../components/Banner'
import ProductsList from '../components/ProductsList'
import Game from '../modules/Game'
import resident from '../assets/images/resident.png'
import diablo from '../assets/images/diablo.png'
import starwars from '../assets/images/star_wars.png'
import zelda from '../assets/images/zelda.png'

const promotions: Game[] = [
  {
    id: 1,
    title: 'Resident Evil 4',
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror e tiro em terceira pessoa desenvolvido e publicado pela Capcom...',
    image: `${resident}`,
    system: 'Windows',
    infos: ['-10%', 'R$ 150,00']
  },
  {
    id: 2,
    title: 'Resident Evil 4',
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror e tiro em terceira pessoa desenvolvido e publicado pela Capcom...',
    image: `${resident}`,
    system: 'Windows',
    infos: ['-10%', 'R$ 150,00']
  },
  {
    id: 3,
    title: 'Resident Evil 4',
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror e tiro em terceira pessoa desenvolvido e publicado pela Capcom...',
    image: `${resident}`,
    system: 'Windows',
    infos: ['-10%', 'R$ 150,00']
  },
  {
    id: 4,
    title: 'Resident Evil 4',
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror e tiro em terceira pessoa desenvolvido e publicado pela Capcom...',
    image: `${resident}`,
    system: 'Windows',
    infos: ['-10%', 'R$ 150,00']
  }
]

const commingSoon: Game[] = [
  {
    id: 5,
    title: 'Diablo IV',
    category: 'RPG',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror e tiro em terceira pessoa desenvolvido e publicado pela Capcom...',
    image: `${diablo}`,
    system: 'Windows',
    infos: ['-10%', 'R$ 150,00']
  },
  {
    id: 6,
    title: 'Star Wars',
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror e tiro em terceira pessoa desenvolvido e publicado pela Capcom...',
    image: `${starwars}`,
    system: 'PS5',
    infos: ['-10%', 'R$ 300,00']
  },
  {
    id: 7,
    title: 'The Legend of Zelda: The Breath of the Wild',
    category: 'RPG',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror e tiro em terceira pessoa desenvolvido e publicado pela Capcom...',
    image: `${zelda}`,
    system: 'Nintendo Switch',
    infos: ['-10%', 'R$ 299,00']
  },
  {
    id: 8,
    title: 'Resident Evil 4',
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror e tiro em terceira pessoa desenvolvido e publicado pela Capcom...',
    image: `${resident}`,
    system: 'Windows',
    infos: ['-10%', 'R$ 150,00']
  }
]

const Home = () => (
  <>
    <Banner />
    <ProductsList background="gray" title="Promoções" games={promotions} />
    <ProductsList background="black" title="Em breve" games={commingSoon} />
  </>
)

export default Home
