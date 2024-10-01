import styled from 'styled-components'

export const Wrapper = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    font-size: 1.6rem;
    font-weight: 400;
    color: #d4d4d4;
  }
`
export const Sections = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Item = styled.li`
  font-size: 1.8rem;
  font-weight: 400;
  color: #d4d4d4;

  &:not(:nth-child(1)) {
    padding-left: 4rem;
  }
`
