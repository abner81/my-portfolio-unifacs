import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2.4rem 0;
`
export const Sections = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
`
export const Item = styled.li`
  cursor: pointer;
  color: #bab9b9;
  font-size: 1.6rem;
  font-weight: 400;
  padding-left: 3rem;

  &:hover {
    color: #5454d4;
    transition: 0.2s ease-in-out;
  }
`

export const Button = styled.button`
  padding: 1.2rem;
  font-size: 1.6rem;
  width: 15.7rem;
  background: none;
  border: 1px solid white;
  border-radius: 5px;
  color: white;
  font-weight: 400;
  cursor: pointer;

  &:hover {
    background-color: #5454d4;
    border-color: #5454d4;
    transition: 0.2s ease-in-out all;
  }
`
