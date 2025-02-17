import { styled } from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.div`
  border-radius: 8px;
  background-color: ${colors.gray};
  padding: 24px;
  margin-bottom: 40px;

  h2,
  h3 {
    font-size: 18pz;
    font-weight: bold;
    color: ${colors.white};
    margin-bottom: 24px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
  }

  .marginTop {
    margin-top: 24px;
  }

  .justify-text {
    text-align: justify;
  }
`
