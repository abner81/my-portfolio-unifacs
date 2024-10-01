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
          <Link href="#service">Service</Link>
        </S.Item>
        <S.Item>
          <Link href="#our-project">Our Project</Link>
        </S.Item>
        <S.Item>
          <Link href="#about-us">About us</Link>
        </S.Item>
      </S.Sections>
    </nav>
    <S.Button>Contact Us</S.Button>
  </S.Wrapper>
)

export default Header
