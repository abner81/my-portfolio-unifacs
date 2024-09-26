import styled, { css } from 'styled-components'
import { IServiceItem } from './item'
import { opacify } from 'polished'
import media from 'styled-media-query'

export const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const Title = styled.h1`
  font-size: 6rem;
  font-weight: bold;
  line-height: 7rem;
  color: #ffffff;
  max-width: 69.5rem;
  text-align: center;
  margin-bottom: 7rem;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 7rem;
  column-gap: 3rem;

  ${media.greaterThan('small')`
    grid-template-columns: 1fr 1fr;
  `}

  ${media.greaterThan('medium')`
    grid-template-columns: 1fr 1fr 1fr;
  `}
`

export const ItemWrapper = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 30rem;

  h2 {
    font-size: 2.8rem;
  font-weight: 500;
  color: #ffffff;
  text-align: center;
  margin-top: 1rem;
  }

  p {
    font-size: 1.8rem;
  font-weight: 400;
  color: #e2e2e2;
  text-align: center;
  margin-top: 1rem;
  }
`

export const IconWrapper = styled.div<Pick<IServiceItem, 'color'>>`
  ${({ color }) => css`
    background-color: ${opacify(-0.9, color)};
    border-radius: 100%;
    padding: 1.5rem;

    svg {
      color: ${color};
      font-size: 2.7rem;
    }
  `}
`
