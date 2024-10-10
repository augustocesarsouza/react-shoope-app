import { SecondPromotionProps } from '../Promotion/Promotion';
import * as Styled from './styled';

interface SecondPromotionComponentProps {
  secondPromotion: SecondPromotionProps;
}

const SecondPromotion = ({ secondPromotion }: SecondPromotionComponentProps) => {
  return (
    <Styled.ContainerSecondInnerPromotion>
      <Styled.ContainerImgAndTitleDescription>
        <Styled.ContainerImgInner>
          <Styled.Img src={secondPromotion.img} alt={secondPromotion.title} />
        </Styled.ContainerImgInner>
        <Styled.ContainerSecondTitleAndDescription>
          <Styled.H1>{secondPromotion.title}</Styled.H1>
          <Styled.Span>{secondPromotion.description}</Styled.Span>
          <Styled.ContainerSecondImgInner>
            <Styled.Img
              src={secondPromotion.imgInnerFirst}
              alt={secondPromotion.altImgInnerFirst}
            />
            <Styled.Img
              src={secondPromotion.imgInnerSecond}
              alt={secondPromotion.altImgInnerSecond}
            />
            <Styled.Img
              src={secondPromotion.imgInnerThird}
              alt={secondPromotion.altImgInnerThird}
            />
          </Styled.ContainerSecondImgInner>
          <Styled.Span>{secondPromotion.date}</Styled.Span>
        </Styled.ContainerSecondTitleAndDescription>
      </Styled.ContainerImgAndTitleDescription>
      <Styled.ContainerButtonDetail>
        <Styled.Button>Ver Detalhes</Styled.Button>
      </Styled.ContainerButtonDetail>
    </Styled.ContainerSecondInnerPromotion>
  );
};

export default SecondPromotion;
