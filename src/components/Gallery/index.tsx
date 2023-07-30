import { useState } from 'react'

import Section from '../Section'
import playIcon from '../../assets/images/play.png'
import zoomIcon from '../../assets/images/zoom.png'
import closeIcon from '../../assets/images/fechar.png'

import * as S from './styles'

interface ModalState extends GalleryItem {
  isVisible: boolean
}

type Props = {
  defaultCover: string
  name: string
  items: GalleryItem[]
}

const Gallery = ({ defaultCover, name, items }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    type: 'image',
    url: '',
    isVisible: false
  })

  const closeModal = () => {
    setModal({
      isVisible: false,
      type: 'image',
      url: ''
    })
  }

  const getMediaCover = (item: GalleryItem) => {
    if (item.type === 'image') return item.url
    return defaultCover
  }

  const getMediaIcon = (item: GalleryItem) => {
    if (item.type === 'image') return zoomIcon
    return playIcon
  }

  return (
    <>
      <Section background="black" title="Galeria">
        <S.Items>
          {items.map((media, index) => (
            <S.Item key={media.url}>
              <img
                src={getMediaCover(media)}
                alt={`Mídia ${index + 1} de ${name}`}
              />
              <S.Action
                onClick={() =>
                  setModal({
                    isVisible: true,
                    type: media.type,
                    url: media.url
                  })
                }
              >
                <img
                  src={getMediaIcon(media)}
                  alt="Clique para maximizar a mídia"
                />
              </S.Action>
            </S.Item>
          ))}
        </S.Items>
      </Section>
      <S.Modal className={modal.isVisible ? 'is-visible' : ''}>
        <S.ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img src={closeIcon} alt="Ícone de fechar" onClick={closeModal} />
          </header>
          {modal.type === 'image' ? (
            <img src={modal.url} />
          ) : (
            <iframe frameBorder={0} src={modal.url} />
          )}
        </S.ModalContent>
        <div className="overlay" onClick={closeModal}></div>
      </S.Modal>
    </>
  )
}

export default Gallery
