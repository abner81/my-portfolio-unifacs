import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.section`
  h1 {
    font-size: 5.8rem;
    font-weight: bold;
  }
`

export const Content = styled.div`
  margin-top: 7rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(40rem, 1fr));
  row-gap: 2.4rem;
  justify-content: center;

  ${media.lessThan('large')`
    grid-template-columns: 380px;
  `}
`

export const Box = styled.div`
  width: 38.5rem;
  height: 30rem;
  background-color: #1e1e20;
  border-radius: 1.5rem;
  padding: 2.4rem;

  &:nth-child(2) {
    margin-top: 4rem;
  }
  &:nth-child(3) {
    margin-top: 8rem;
  }

  img {
    width: 100%;
  }
`
