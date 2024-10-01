import Logo from 'components/Logo'
import * as S from './styles'

const Footer = () => (
  <S.Wrapper>
    <Logo />

    <S.Sections>
      <S.Item>Support</S.Item>
      <S.Item>Privacy Policy</S.Item>
      <S.Item>Terms and Conditions</S.Item>
    </S.Sections>

    <p>© 2024 Abner Dev, All Rights Reserved</p>
  </S.Wrapper>
)

export default Footer
