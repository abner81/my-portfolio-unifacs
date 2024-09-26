import * as S from './styles'
import Logo from 'components/Logo'

const Header = () => (
  <S.Wrapper>
    <Logo />
    <S.Sections>
      <S.Item>Home</S.Item>
      <S.Item>Service</S.Item>
      <S.Item>Our Project</S.Item>
      <S.Item>About us</S.Item>
    </S.Sections>
    <S.Button>Contact Us</S.Button>
  </S.Wrapper>
)

export default Header
