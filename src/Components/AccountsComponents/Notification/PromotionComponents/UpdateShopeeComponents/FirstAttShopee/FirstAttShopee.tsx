import { useEffect, useState } from 'react';
import * as Styled from './styled';
import { FormatDataPromotion } from './FormatDataPromotion';
import { FirstAttShopeeProps } from '../UpdateShopee/UpdateShopee';

interface FirstPromotionComponentProps {
  firstAttShopee: FirstAttShopeeProps;
  firstAttShopeeNumber: number;
}

const FirstAttShopee = ({ firstAttShopee, firstAttShopeeNumber }: FirstPromotionComponentProps) => {
  const [stringDateAndHour, setStringDateAndHour] = useState('');

  useEffect(() => {
    let stringDateAndHour = FormatDataPromotion(firstAttShopee.date);
    setStringDateAndHour(stringDateAndHour);
  }, [firstAttShopee]);

  return (
    <Styled.ContainerFirstPromotion $firstAttShopeeNumber={firstAttShopeeNumber}>
      <Styled.ContainerFirstInnerPromotion>
        <Styled.ContainerImgInner>
          <Styled.Img src={firstAttShopee.img} alt={firstAttShopee.title} />
        </Styled.ContainerImgInner>
        <Styled.ContainerTitleAndDescription>
          <Styled.H1>{firstAttShopee.title}</Styled.H1>
          <Styled.Span>{firstAttShopee.description}</Styled.Span>
          <Styled.Span>{stringDateAndHour}</Styled.Span>
        </Styled.ContainerTitleAndDescription>
      </Styled.ContainerFirstInnerPromotion>

      <Styled.ContainerButtonDetail>
        <Styled.Button>Ver Detalhes</Styled.Button>
      </Styled.ContainerButtonDetail>
    </Styled.ContainerFirstPromotion>
  );
};

export default FirstAttShopee;
