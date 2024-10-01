import { darken } from 'polished'
import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 55rem;
    height: 55rem;
  }
`

export const Title = styled.h1`
  font-size: 6rem;
  line-height: 6.5rem;
  font-weight: bold;
`

export const SubTitle = styled.p`
  font-size: 1.7rem;
  font-weight: 400;
  color: #cecece;
  line-height: 3rem;
  margin-top: 2.4rem;
`

export const Button = styled.button`
  margin-top: 5rem;
  padding: 1.5rem 2.5rem;
  border-radius: 0.5rem;
  background-color: #5454d4;
  border: none;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 1.6rem;
  font-weight: bold;

  &:hover {
    background-color: ${darken(0.1, '#5454d4')};
    transition: 0.2s ease-in-out all;
  }

  svg {
    margin-left: 1.3rem;
  }
`
