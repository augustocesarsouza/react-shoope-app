import { useEffect, useState } from 'react';
import { PromotionProps } from '../Promotion/Promotion';
import * as Styled from './styled';
import { FormatDataPromotion } from '../FirstPromotion/FormatDataPromotion';

interface SecondPromotionComponentProps {
  secondPromotion: PromotionProps;
}

const SecondPromotion = ({ secondPromotion }: SecondPromotionComponentProps) => {
  const [stringDateAndHour, setStringDateAndHour] = useState('');

  useEffect(() => {
    let stringDateAndHour = FormatDataPromotion(secondPromotion.promotionDTO.date);
    setStringDateAndHour(stringDateAndHour);
  }, [secondPromotion]);

  return (
    <Styled.ContainerSecondInnerPromotion>
      <Styled.ContainerImgAndTitleDescription>
        <Styled.ContainerImgInner>
          <Styled.Img
            src={secondPromotion.promotionDTO.img}
            alt={secondPromotion.promotionDTO.title}
          />
        </Styled.ContainerImgInner>
        <Styled.ContainerSecondTitleAndDescription>
          <Styled.H1>{secondPromotion.promotionDTO.title}</Styled.H1>
          <Styled.Span>{secondPromotion.promotionDTO.description}</Styled.Span>
          <Styled.ContainerSecondImgInner>
            <Styled.Img
              src={secondPromotion.promotionDTO.imgInnerFirst}
              alt={secondPromotion.promotionDTO.altImgInnerFirst}
            />
            <Styled.Img
              src={secondPromotion.promotionDTO.imgInnerSecond}
              alt={secondPromotion.promotionDTO.altImgInnerSecond}
            />
            <Styled.Img
              src={secondPromotion.promotionDTO.imgInnerThird}
              alt={secondPromotion.promotionDTO.altImgInnerThird}
            />
          </Styled.ContainerSecondImgInner>
          <Styled.Span>{stringDateAndHour}</Styled.Span>
        </Styled.ContainerSecondTitleAndDescription>
      </Styled.ContainerImgAndTitleDescription>
      <Styled.ContainerButtonDetail>
        <Styled.Button>Ver Detalhes</Styled.Button>
      </Styled.ContainerButtonDetail>
    </Styled.ContainerSecondInnerPromotion>
  );
};

export default SecondPromotion;
