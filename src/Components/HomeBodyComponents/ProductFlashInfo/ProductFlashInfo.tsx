import { useEffect, useState } from 'react';
import SvgFlashDeals from '../../Svg/SvgFlashDeals/SvgFlashDeals';
import { ProductFlashDeals } from '../HomeBodyMain/HomeBodyMain';
import * as Styled from './styled';

interface ProductFlashInfoProps {
  product: ProductFlashDeals;
}

const ProductFlashInfo = ({ product }: ProductFlashInfoProps) => {
  const [price, setPrice] = useState('0,00');

  useEffect(() => {
    let priceFixed = product.priceProduct.toFixed(2).replace('.', ',');
    setPrice(priceFixed);
  }, [product]);

  return (
    <Styled.ContainerProductImgAndPrice>
      <Styled.ContainerProductImg>
        <Styled.ContainerDiscountPercentage>
          <SvgFlashDeals />
          <Styled.Span>-{product.discountPercentage}%</Styled.Span>
        </Styled.ContainerDiscountPercentage>
        <Styled.Img src={product.imgProduct} alt={product.altValue} />

        {product.imgPartBottom && (
          <Styled.ImgFreeShipping src={product.imgPartBottom} alt="img-free-shipping" />
        )}
      </Styled.ContainerProductImg>

      <Styled.H1>R$ {price}</Styled.H1>
      <Styled.ContainerPopular>
        <Styled.ContainerBackgroundUp
          $valuePercentage={product.popularityPercentage}
        ></Styled.ContainerBackgroundUp>
        <Styled.Span>POPULAR</Styled.Span>
        <Styled.ContainerBackgroundFaint></Styled.ContainerBackgroundFaint>
      </Styled.ContainerPopular>
    </Styled.ContainerProductImgAndPrice>
  );
};

export default ProductFlashInfo;
