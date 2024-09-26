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
    subTitle: 'Create a platform with the best and coolest quality from us.',
    title: 'Development'
  },
  {
    icon: <MdOutlineDesignServices />,
    color: '#F04037',
    subTitle:
      'We provide UI/UX Design services, and of course with the best quality.',
    title: 'UI/UX Designer'
  },
  {
    icon: <FaLaptopCode />,
    color: '#FEDC5A',
    subTitle: 'We provide Graphic Design services, with the best designers.',
    title: 'Graphik Designer'
  },
  {
    icon: <CgMenuMotion />,
    color: '#5454D4',
    subTitle: 'Create a platform with the best and coolest quality from us.',
    title: 'Motion Graphik'
  },
  {
    icon: <MdOutlinePhotoCamera />,
    color: '#5454D4',
    subTitle:
      'We provide Photography services, and of course with the best quality.',
    title: 'Photography'
  },
  {
    icon: <RiVideoLine />,
    color: '#5454D4',
    subTitle: 'Create a platform with the best and coolest quality from us..',
    title: 'Videography'
  }
]

const ServicesList = () => (
  <S.Wrapper>
    <S.Title>The Service We Provide For You</S.Title>
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
