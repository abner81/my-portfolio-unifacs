import * as S from './styles'
import { RiArrowRightUpLine } from "react-icons/ri";

const Home = () => (
  <S.Wrapper>
    <div>
      <S.Title>Transformando Ideias em Soluções de Software</S.Title>
      <S.SubTitle>Eu sou Abner Machado, desenvolvedor especializado em criar aplicações robustas e escaláveis que impulsionam seu negócio ao próximo nível.</S.SubTitle>
   <S.Button>Our Services <RiArrowRightUpLine size='14' color='white'/> </S.Button>
    </div>
    <img src='img/my-photo.png'/>
  </S.Wrapper>
)

export default Home
 