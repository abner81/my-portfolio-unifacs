import * as S from './styles'

export type IServiceItem = {
  icon: JSX.Element
  color: string
  title: string
  subTitle: string
}

const Item = ({ icon, color, title, subTitle }: IServiceItem) => {
  return (
    <S.ItemWrapper>
      <S.IconWrapper color={color}>{icon}</S.IconWrapper>
      <h2>{title}</h2>
      <p>{subTitle}</p>
    </S.ItemWrapper>
  )
}

export default Item
