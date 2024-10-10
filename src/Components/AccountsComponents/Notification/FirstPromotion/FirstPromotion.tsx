import { FirstPromotionProps } from '../Promotion/Promotion';
import * as Styled from './styled';

interface FirstPromotionComponentProps {
  firstPromotion: FirstPromotionProps;
}

const FirstPromotion = ({ firstPromotion }: FirstPromotionComponentProps) => {
  return (
    <Styled.ContainerFirstPromotion>
      <Styled.ContainerFirstInnerPromotion>
        <Styled.ContainerImgInner>
          <Styled.Img src={firstPromotion.img} alt={firstPromotion.title} />
        </Styled.ContainerImgInner>
        <Styled.ContainerTitleAndDescription>
          <Styled.H1>{firstPromotion.title}</Styled.H1>
          <Styled.Span>{firstPromotion.description}</Styled.Span>
          <Styled.Span>{firstPromotion.date}</Styled.Span>
        </Styled.ContainerTitleAndDescription>
      </Styled.ContainerFirstInnerPromotion>

      <Styled.ContainerButtonDetail>
        <Styled.Button>Ver Detalhes</Styled.Button>
      </Styled.ContainerButtonDetail>
    </Styled.ContainerFirstPromotion>
  );
};

export default FirstPromotion;
