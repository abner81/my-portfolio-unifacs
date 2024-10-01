import Item, { IServiceItem } from './item'
import * as S from './styles'

import { FaLaptopCode } from 'react-icons/fa'
import { MdOutlineDesignServices } from 'react-icons/md'
import { CgMenuMotion } from 'react-icons/cg'
import { MdOutlinePhotoCamera } from 'react-icons/md'
import { RiVideoLine } from 'react-icons/ri'

const services: IServiceItem[] = [
  {
    icon: <FaLaptopCode />,
    color: '#5454D4',
    subTitle: 'Desenvolvimento de software com qualidade e inovação para transformar suas ideias em soluções robustas.',
    title: 'Desenvolvimento'
  },
  {
    icon: <MdOutlineDesignServices />,
    color: '#F04037',
    subTitle:
    'Criação de interfaces intuitivas e designs funcionais que melhoram a experiência do usuário.',
  title: 'UI/UX Design'
  },
  {
    icon: <FaLaptopCode />,
    color: '#FEDC5A',
 subTitle: 'Design visual e branding com impacto, sempre focado nos detalhes e na estética.',
    title: 'Design Gráfico'
  },
  {
    icon: <FaLaptopCode />,
    color: '#34A853',
       subTitle: 'Arquitetura e design de software baseados no domínio, garantindo que as regras de negócio sejam o centro do projeto.',
    title: 'DDD (Domain-Driven Design)'
  },
  {
    icon: <FaLaptopCode />,
    color: '#4285F4',
    subTitle: 'Código limpo, legível e de fácil manutenção, seguindo as melhores práticas de programação.',
    title: 'Clean Code'
  },
  {
    icon: <FaLaptopCode />,
    color: '#FBBC05',
    subTitle: 'Estrutura de software organizada e escalável, utilizando os princípios da Clean Architecture.',
    title: 'Clean Architecture'
  }
]

const ServicesList = () => (
  <S.Wrapper id='our-project'>
    <S.Title>Serviços que Forneço Para Você</S.Title>
    <S.List>
      {services.map((service) => (
        <Item
          icon={<FaLaptopCode />}
          color={service.color}
          subTitle={service.subTitle}
          title={service.title}
        />
      ))}
    </S.List>
  </S.Wrapper>
)

export default ServicesList
