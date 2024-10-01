import { darken } from 'polished'
import styled from 'styled-components'

export const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-size: 6rem;
    line-height: 6.5rem;
    font-weight: bold;
    max-width: 82rem;
  }
`

export const Button = styled.button`
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
`
