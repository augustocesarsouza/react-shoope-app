import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import HeaderFlashSaleMain from '../HeaderFlashSaleComponents/HeaderFlashSaleMain/HeaderFlashSaleMain';
import { Url } from '../../../Utils/Url';
import * as Styled from './styled';
import SvgArrowBottom from '../../Svg/SvgArrowBottom/SvgArrowBottom';
import ProductFlashSaleAllInfo, {
  GetFlashSaleProductProps,
} from '../ProductFlashSaleAllInfo/ProductFlashSaleAllInfo';

const FlashSaleProduct = () => {
  const obj = useParams();
  const nav = useNavigate();
  const [getFlashSaleProduct, setGetFlashSaleProduct] = useState<GetFlashSaleProductProps | null>(
    null
  );

  useEffect(() => {
    const { id } = obj;

    if (id) {
      getFlashSaleProductByProductFlashSaleId(id);
    }
  }, []);

  const getFlashSaleProductByProductFlashSaleId = async (productFlashSaleId: string) => {
    const res = await fetch(
      `${Url}/get-flash-sale-product-by-product-flash-sale-id/${productFlashSaleId}`
    );

    if (res.status === 200) {
      const json = await res.json();
      let getFlashSaleProduct: GetFlashSaleProductProps = json.data;

      setGetFlashSaleProduct(getFlashSaleProduct);
    }

    if (res.status === 400) {
      //ERROR
    }

    if (res.status === 403 || res.status === 401) {
      localStorage.removeItem('user');
      nav('/login');
      return;
    }
  };

  return (
    <Styled.ContainerMain>
      <HeaderFlashSaleMain></HeaderFlashSaleMain>
      <Styled.ContainerProductWasClickedMain>
        {getFlashSaleProduct && (
          <Styled.ContainerProductWasClicked>
            <Styled.ContainerProductLayers>
              <Styled.Span>Shopee</Styled.Span>
              <SvgArrowBottom />
              <Styled.Span>Saúde</Styled.Span>
              <SvgArrowBottom />
              <Styled.Span>Cuidados Pessoais</Styled.Span>
              <SvgArrowBottom />
              <Styled.Span>Cuidados Bucais</Styled.Span>
              <SvgArrowBottom />
              <Styled.H1>
                {getFlashSaleProduct.productsOfferFlashDTO.title.substring(0, 50)}
              </Styled.H1>
            </Styled.ContainerProductLayers>

            <ProductFlashSaleAllInfo getFlashSaleProduct={getFlashSaleProduct} />
          </Styled.ContainerProductWasClicked>
        )}
      </Styled.ContainerProductWasClickedMain>
    </Styled.ContainerMain>
  );
};

export default FlashSaleProduct;
