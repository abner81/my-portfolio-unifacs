import styled, { css } from 'styled-components'

const bgOpacity = css`
  opacity: 0.6;
`

export const Wrapper = styled.div`
width: 100vw;
height: 100vh;

  .left_background {
    position: absolute;
    top: -10%;
    left: 0;
    ${bgOpacity}
  }

  .right_background {
    position: absolute;
    top: 0;
    right: 0;
    ${bgOpacity}
  }

  img {
    z-index: -999;
  }
`

export const ServiceWrapper = styled.div`
  position: relative;
  margin-top: 16rem;

  .service_left {
    position: absolute;
    top: -80%;
    left: -3%;
    ${bgOpacity}
  }

  .service_right {
    position: absolute;
    top: -80%;
    right: -3%;
    ${bgOpacity}
  }
`

export const AboutUsWrapper = styled.div`
  position: relative;
  margin-top: 20rem;

  .about_us_right {
    position: absolute;
    top: -60%;
    right: 0;
    ${bgOpacity}
  }
`

export const ContactUsWrapper = styled.div`
  margin-top: 20rem;
  background-color: #1f1f21;
  padding: 15rem 0;
`

export const FooterWrapper = styled.div`
  padding-top: 5rem;
  padding-bottom: 10rem;
`
