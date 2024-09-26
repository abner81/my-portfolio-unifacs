import * as S from './styles'
import { RiArrowRightUpLine } from "react-icons/ri";

const Home = () => (
  <S.Wrapper>
    <div>
      <S.Title>Build Your Awesome Platform</S.Title>
      <S.SubTitle>Enver studio is a digital studio that offers several services such as UI/UX Design to developers, we will provide the best service for those of you who use our services.</S.SubTitle>
   <S.Button>Our Services <RiArrowRightUpLine size='14' color='white'/> </S.Button>
    </div>
    <img src='img/my-photo.png'/>
  </S.Wrapper>
)

export default Home
 