import { useEffect, useState } from 'react';
import SvgUserBody from '../../../HeaderComponents/AllSvgHeader/SvgUserBody/SvgUserBody';
import { ProductFlashSaleReviewsProps } from '../../ProductReviews/ProductReviews';
import * as Styled from './styled';
import SvgStar from '../../../Svg/SvgStar/SvgStar';

interface EachReviewsInnerProps {
  product: ProductFlashSaleReviewsProps;
}

const EachReviewsInner = ({ product }: EachReviewsInnerProps) => {
  const [countStarArray, setCountStarArray] = useState<number[] | null>(null);
  const [dateCreationString, setDateCreationString] = useState<string | null>(null);

  useEffect(() => {
    // getFlashSaleProductByProductFlashSaleId(getFlashSaleProduct);

    let dateCreation = new Date(product.creationDate);
    console.log(product.creationDate);

    let fullYear = dateCreation.getFullYear();

    let month = dateCreation.getMonth();
    let monthString = ``;

    let day = dateCreation.getDate();
    let dayString = ``;

    let hours = dateCreation.getHours();
    let hoursString = ``;
    let minutes = dateCreation.getMinutes();
    let minutesString = ``;

    if (month < 10) {
      monthString = `0${month}`;
    }

    if (day < 10) {
      dayString = `0${day}`;
    }

    if (hours < 10) {
      hoursString = `0${hours}`;
    }

    if (minutes < 10) {
      minutesString = `0${minutes}`;
    }

    let dateCreationString = `${fullYear}-${month}-${dayString} ${hours}:${minutes}`;
    setDateCreationString(dateCreationString);

    let countStarArray = [];

    for (let i = 1; i <= product.starQuantity; i++) {
      countStarArray.push(i);
    }

    setCountStarArray(countStarArray);
  }, [product]);

  return (
    <Styled.ContainerImgAndSvg>
      <Styled.Container>
        {product.userDTO.userImage && (
          <Styled.ContainerImgUser>
            <Styled.Img src={product.userDTO.userImage} alt="img-user" />
          </Styled.ContainerImgUser>
        )}

        {!product.userDTO.userImage && (
          <Styled.ContanerSvgWithoutImage>
            <SvgUserBody />
          </Styled.ContanerSvgWithoutImage>
        )}
      </Styled.Container>
      <Styled.ContainerUserInfo>
        <Styled.Span>{product.userDTO.name}</Styled.Span>

        <Styled.ContainerQuantityStar>
          <Styled.ContainerStarRedSvg>
            {countStarArray && countStarArray.map((el) => <SvgStar key={el} />)}
          </Styled.ContainerStarRedSvg>
          <Styled.ContainerStarBlackSvg>
            {countStarArray &&
              Array.from({ length: 5 - countStarArray.length }).map((_, index) => (
                <SvgStar key={index} />
              ))}
          </Styled.ContainerStarBlackSvg>
        </Styled.ContainerQuantityStar>
        <Styled.ContainerSpanDataCration>
          {dateCreationString && <Styled.Span>{dateCreationString}</Styled.Span>}|
          {product && <Styled.Span>{product.variation}</Styled.Span>}
        </Styled.ContainerSpanDataCration>

        <Styled.ContainerComments>
          <Styled.Span>{product.message}</Styled.Span>
        </Styled.ContainerComments>
      </Styled.ContainerUserInfo>
    </Styled.ContainerImgAndSvg>
  );
};

export default EachReviewsInner;
