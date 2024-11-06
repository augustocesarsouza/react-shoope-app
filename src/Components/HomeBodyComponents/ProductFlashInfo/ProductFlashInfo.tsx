import { useEffect, useState } from 'react';
import SvgFlashDeals from '../../Svg/SvgFlashDeals/SvgFlashDeals';
import * as Styled from './styled';
import { useNavigate } from 'react-router-dom';
import { ObjUser } from '../../InterfaceAll/IObjUser/IObjUser';
import { IProductFlashDeals } from '../../InterfaceAll/IProduct/IProductFlashDeals/IProductFlashDeals';

interface ProductFlashInfoProps {
  product: IProductFlashDeals;
  userLogged: ObjUser;
  timeEnd: string;
}

const ProductFlashInfo = ({ product, userLogged, timeEnd }: ProductFlashInfoProps) => {
  const [price, setPrice] = useState('0,00');
  const nav = useNavigate();

  useEffect(() => {
    let priceFixed = product.priceProduct.toFixed(2).replace('.', ',');
    setPrice(priceFixed);
  }, [product]);

  const onClickContainerProductFlashSale = () => {
    nav('/flash_sale', { state: { user: userLogged, timeEnd: timeEnd } });

    // nav('/user/account/profile', { state: { user: userObjState } });
  };

  return (
    <Styled.ContainerProductImgAndPrice onClick={onClickContainerProductFlashSale}>
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
