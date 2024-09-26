import { RouterContext } from 'next/dist/shared/lib/router-context'
import GlobalStyles from '../src/styles/global'

export const parameters = {
  nextRouter: {
    Provider: RouterContext.Provider
  }, 
  backgrounds: {
    default: 'black', // Define o preto como padrão
    values: [
      {
        name: 'black', // Nome da cor
        value: '#19191B', // Valor hexadecimal do preto
      },
      {
        name: 'white', // Também pode adicionar uma opção de branco
        value: '#ffffff', 
      },
    ],
  },
}

export const decorators = [
  (Story) => (
    <>
      <GlobalStyles />
      <Story />
    </>
  )
]
