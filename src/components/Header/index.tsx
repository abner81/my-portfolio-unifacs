import Link from 'next/link'
import * as S from './styles'
import Logo from 'components/Logo'

const Header = () => (
  <S.Wrapper id="home">
    <Logo />
    <nav>
      <S.Sections>
        <S.Item>
          <Link href="#home">Home</Link>
        </S.Item>
        <S.Item>
          <Link href="#service">Serviços</Link>
        </S.Item>
        <S.Item>
          <Link href="#our-project">Especialidades</Link>
        </S.Item>
        <S.Item>
          <Link href="#about-us">Meus Projetos</Link>
        </S.Item>
      </S.Sections>
    </nav>
    <S.Button>Entre em Contato</S.Button>
  </S.Wrapper>
)

export default Header
