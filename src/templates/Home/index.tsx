import { Container } from 'components/Container'
import * as S from './styles'
import Header from 'components/Header'
import Home from 'components/Home'
import Services from 'components/Services'
import ServicesList from 'components/ServicesList'
import AboutUs from 'components/AboutUs'
import ContactUs from 'components/ContactUs'
import Footer from 'components/Footer'

const HomeTemplate = () => {
  return (
    <S.Wrapper>
      <img src="img/home_left.svg" className="left_background" />
      <img src="img/home_right.svg" className="right_background" />

      <Container>
        <Header />
      </Container>

      <Container style={{ marginTop: '3.5rem' }}>
        <Home />
      </Container>

     
        <Container style={{ marginTop: '20rem' }}>
          <Services />
        </Container>

      <S.ServiceWrapper>
        <img src="img/service_left_bg.svg" className="service_left" />
        <img src="img/service_right_bg.svg" className="service_right" />
        <Container>
          <ServicesList />
        </Container>
      </S.ServiceWrapper>

      <S.AboutUsWrapper>
        <img src="img/about_us_bg.svg" className="about_us_right" />
        <Container>
          <AboutUs />
        </Container>
      </S.AboutUsWrapper>

      <S.ContactUsWrapper>
        <Container>
          <ContactUs />
        </Container>
      </S.ContactUsWrapper>

      <S.FooterWrapper>
        <Container>
          <Footer />
        </Container>
      </S.FooterWrapper>
    </S.Wrapper>
  )
}

export default HomeTemplate
