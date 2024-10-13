import { useEffect, useState } from 'react';
import { PromotionProps } from '../Promotion/Promotion';
import * as Styled from './styled';
import { FormatDataPromotion } from './FormatDataPromotion';

interface FirstPromotionComponentProps {
  firstPromotion: PromotionProps;
}

const FirstPromotion = ({ firstPromotion }: FirstPromotionComponentProps) => {
  const [stringDateAndHour, setStringDateAndHour] = useState('');

  useEffect(() => {
    let stringDateAndHour = FormatDataPromotion(firstPromotion.promotionDTO.date);
    setStringDateAndHour(stringDateAndHour);
  }, [firstPromotion]);

  return (
    <Styled.ContainerFirstPromotion>
      <Styled.ContainerFirstInnerPromotion>
        <Styled.ContainerImgInner>
          <Styled.Img
            src={firstPromotion.promotionDTO.img}
            alt={firstPromotion.promotionDTO.title}
          />
        </Styled.ContainerImgInner>
        <Styled.ContainerTitleAndDescription>
          <Styled.H1>{firstPromotion.promotionDTO.title}</Styled.H1>
          <Styled.Span>{firstPromotion.promotionDTO.description}</Styled.Span>
          <Styled.Span>{stringDateAndHour}</Styled.Span>
        </Styled.ContainerTitleAndDescription>
      </Styled.ContainerFirstInnerPromotion>

      <Styled.ContainerButtonDetail>
        <Styled.Button>Ver Detalhes</Styled.Button>
      </Styled.ContainerButtonDetail>
    </Styled.ContainerFirstPromotion>
  );
};

export default FirstPromotion;
